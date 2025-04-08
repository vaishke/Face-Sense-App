import cv2
import base64
import requests
import time
import numpy as np
from inference_sdk import InferenceHTTPClient
from dotenv import load_dotenv
import os
import tempfile


def load_env():
    load_dotenv()
    api_key = os.getenv("ROBOFLOW_API_KEY")
    model_id = os.getenv("MODEL_ID")
    if not api_key or not model_id:
        raise ValueError("Missing API key or model ID in .env file")
    return api_key, model_id


def initialize_client(api_url, api_key):
    return InferenceHTTPClient(api_url=api_url, api_key=api_key)


def initialize_camera():
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        raise RuntimeError("Error: Could not open webcam.")
    return cap


def capture_frame(cap):
    ret, frame = cap.read()
    if not ret:
        raise RuntimeError("Error: Failed to capture frame.")
    return frame


def encode_frame_to_base64(frame):
    _, buffer = cv2.imencode(".jpg", frame)
    image_bytes = buffer.tobytes()
    return base64.b64encode(image_bytes).decode("utf-8")


def draw_detections(frame, detections):
    for det in detections:
        x, y, w, h = int(det['x']), int(det['y']), int(det['width']), int(det['height'])
        conf = float(det['confidence'])
        x1, y1 = x - w // 2, y - h // 2
        x2, y2 = x + w // 2, y + h // 2

        cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
        label = f"Face {conf:.2f}"
        cv2.putText(frame, label, (x1, y1 - 10), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)


def extract_faces_from_detections(frame, detections):
    faces = []
    for det in detections:
        x, y, w, h = int(det['x']), int(det['y']), int(det['width']), int(det['height'])
        x1, y1 = max(x - w // 2, 0), max(y - h // 2, 0)
        x2, y2 = x + w // 2, y + h // 2
        face = frame[y1:y2, x1:x2]
        faces.append((face, (x1, y1)))
    return faces

def detect_faces(frame):
    api_key, model_id = load_env()
    client = initialize_client("https://detect.roboflow.com", api_key)

    with tempfile.NamedTemporaryFile(suffix=".jpg", delete=False) as tmp_file:
        temp_path = tmp_file.name
        cv2.imwrite(temp_path, frame)

    try:
        result = client.infer(temp_path, model_id=model_id)
    finally:
        os.remove(temp_path)  

    detections = result.get("predictions", [])

    boxes = []
    for det in detections:
        boxes.append({
            "x": int(det["x"]),
            "y": int(det["y"]),
            "width": int(det["width"]),
            "height": int(det["height"])
        })

    return boxes

from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import cv2
import pickle
from dotenv import load_dotenv

from face_detection import detect_faces
from face_recognition import recognize_face 

load_dotenv()

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

# Load embeddings just once here
with open("embeddings.pkl", "rb") as f:
    embeddings = pickle.load(f)

@app.route('/recognize', methods=['POST'])
def recognize():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    image_file = request.files['image']
    image_np = np.frombuffer(image_file.read(), np.uint8)
    frame = cv2.imdecode(image_np, cv2.IMREAD_COLOR)

    boxes = detect_faces(frame)  # list of dicts with x, y, width, height

    recognized_faces = []
    h_frame, w_frame = frame.shape[:2]
    padding = 40

    for box in boxes:
        x, y = int(box['x']), int(box['y'])
        w, h = int(box['width']), int(box['height'])

        x1 = max(x - w // 2 - padding, 0)
        y1 = max(y - h // 2 - padding, 0)
        x2 = min(x + w // 2 + padding, w_frame)
        y2 = min(y + h // 2 + padding, h_frame)

        face_img = frame[y1:y2, x1:x2]

        if face_img.size == 0:
            continue

        name, similarity = recognize_face(face_img, embeddings)

        recognized_faces.append({
            'name': name,
            'box': {
                'x': int(x),
                'y': int(y),
                'width': int(w),
                'height': int(h)
            },
            'similarity': round(similarity, 2)
        })

    return jsonify({'faces': recognized_faces})



if __name__ == '__main__':
    app.run(debug=True)

import tempfile
import cv2
import numpy as np
import pickle
from deepface import DeepFace
from sklearn.metrics.pairwise import cosine_similarity

# Load precomputed embeddings
with open("embeddings.pkl", "rb") as f:
    embeddings = pickle.load(f)

def get_face_embedding(face_img):
    # Resize to 160x160
    face_img = cv2.resize(face_img, (160, 160))
    
    with tempfile.NamedTemporaryFile(suffix=".jpg", delete=False) as temp_file:
        cv2.imwrite(temp_file.name, face_img)
        temp_path = temp_file.name

    face_embedding = DeepFace.represent(
        img_path=temp_path,
        model_name="Facenet",
        enforce_detection=False,
        detector_backend='skip'
    )[0]["embedding"]

    return np.array(face_embedding)

def recognize_face(face_img, embeddings): 
    input_embedding = get_face_embedding(face_img).reshape(1, -1)

    matched_person = "Unknown"
    best_avg_similarity = 0
    best_max_similarity = 0
    best_person_max = "Unknown"

    print(f"Input embedding shape: {input_embedding.shape}")
    for person, emb_list in embeddings.items():
        sims = [cosine_similarity(input_embedding, np.array(e).reshape(1, -1))[0][0] for e in emb_list]
        avg_sim = np.mean(sims)
        max_sim = np.max(sims)

        print(f"\n--- {person} ---")
        print(f"All similarities: {[round(s, 4) for s in sims]}")
        print(f"Avg similarity: {avg_sim:.4f}")
        print(f"Max similarity: {max_sim:.4f}")

        if avg_sim > best_avg_similarity and avg_sim > 0.4:
            best_avg_similarity = avg_sim
            matched_person = person

        if max_sim > best_max_similarity and max_sim > 0.4:
            best_max_similarity = max_sim
            best_person_max = person

    print(f"\nFinal decision based on average: {matched_person} ({best_avg_similarity:.4f})")
    print(f"Final decision based on max: {best_person_max} ({best_max_similarity:.4f})")

    return matched_person, best_avg_similarity

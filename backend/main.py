
#main.py

from fastapi import FastAPI
from database import Base, engine
from controllers.user_controlleur import router as user_router
from controllers.quizMemoire import router as quizmemoire_router
from controllers.quizIntellect import router as quizintelligence_router
from controllers.quizConnaissance import router as quizconnaissance_router

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Ajoutez le middleware CORS
origins = [
    "http://localhost:5173",  # Frontend React
    # Ajoutez d'autres domaines ici si nécessaire
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Permet les origines spécifiées
    allow_credentials=True,
    allow_methods=["*"],  # Permet toutes les méthodes (GET, POST, etc.)
    allow_headers=["*"],  # Permet tous les en-têtes
)


# Ajout du contrôleur
app.include_router(user_router)
app.include_router(quizmemoire_router)
app.include_router(quizconnaissance_router)
app.include_router(quizintelligence_router)

from database import engine, Base
# from Models.modelUser import Utilisateur 

print(" Création des tables en cours...")

# Création des tables
Base.metadata.create_all(bind=engine)

print("Tables créées avec succès !")

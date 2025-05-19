from sqlalchemy import Column, Integer, String
from database import Base  # Base  bien importé depuis database.py

class Utilisateur(Base):
    __tablename__ = "utilisateurs"  # Nom de la table

    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)


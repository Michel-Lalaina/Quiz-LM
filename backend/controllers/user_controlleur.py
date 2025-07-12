from database import get_db
from sqlalchemy.orm import Session
from Models.Users.modelUser import Utilisateur
from fastapi import APIRouter, Depends, HTTPException
from Models.Users.schemas import UserCreate, UserUpdate, UserResponse


router = APIRouter()

#  Récupérer tous
@router.get("/users", response_model=list[UserResponse])
def get_users(db: Session = Depends(get_db)):
    return db.query(Utilisateur).all()

#  Ajouter 
@router.post("/users", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    new_user = Utilisateur(nom=user.nom, email=user.email)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

# Modifier un utilisateur
@router.put("/users/{id}", response_model=UserResponse)
def update_user(id: int, user: UserUpdate, db: Session = Depends(get_db)):
    db_user = db.query(Utilisateur).filter(Utilisateur.id == id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    
    db_user.nom = user.nom
    db_user.email = user.email
    db.commit()
    db.refresh(db_user)
    return db_user

#  Supprimer
@router.delete("/users/{id}")
def delete_user(id: int, db: Session = Depends(get_db)):
    db_user = db.query(Utilisateur).filter(Utilisateur.id == id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    
    db.delete(db_user)
    db.commit()
    return {"message": "Utilisateur supprimé avec succès"}

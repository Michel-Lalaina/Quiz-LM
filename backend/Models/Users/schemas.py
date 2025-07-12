from pydantic import BaseModel, EmailStr

#  Modèle :
#pour la création d'un utilisateur
class UserCreate(BaseModel):
    nom: str
    email: EmailStr

#  pour la mise à jour d'un utilisateur
class UserUpdate(BaseModel):
    nom: str
    email: EmailStr

# de réponse
class UserResponse(BaseModel):
    id: int
    nom: str
    email: str

    class Config:
        from_attributes = True

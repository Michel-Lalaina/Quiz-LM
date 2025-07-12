from pydantic import BaseModel

#  Modèle :
#pour la création d'un quiz de memoire
class QuizmemoireCreate(BaseModel):
    title: str
    description: str | None = None
    A: str
    B: str
    C: str
    D: str | None = None
    true: str

#  pour la mise à jour d'un quiz memoire
class QuizmemoireUpdate(BaseModel):
    title: str
    description: str | None = None
    A: str
    B: str
    C: str
    D: str | None = None
    true: str

# de réponse
class QuizmemoireResponse(BaseModel):
    id: int
    title: str
    description: str | None = None
    A: str
    B: str
    C: str
    D: str | None = None 
    true: str

    class Config:
        from_attributes = True

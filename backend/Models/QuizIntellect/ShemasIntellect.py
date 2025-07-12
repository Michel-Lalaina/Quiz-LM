from pydantic import BaseModel

#  Modèle :
#pour la création d'un quiz intelligence
class QuizintellectCreate(BaseModel):
    title: str
    description: str | None = None
    A: str
    B: str
    C: str
    D: str | None = None
    true: str

#  pour la mise à jour d'un quiz intellect
class QuizintellectUpdate(BaseModel):
    title: str
    description: str | None = None
    A: str
    B: str
    C: str
    D: str | None = None
    true: str

# de réponse
class QuizintellectResponse(BaseModel):
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

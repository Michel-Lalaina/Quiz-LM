from pydantic import BaseModel

class QuizBase(BaseModel):
    title: str
    description: str | None = None
    A: str
    B: str
    C: str
    D: str | None = None
    true: str
    
class QuizCreate(QuizBase):
    pass

class QuizResponse(QuizBase):
    id: int

    class Config:
        orm_mode = True

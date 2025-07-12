from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from database import get_db
from Models.QuizIntellect.ModelIntellect import Quiz
from Models.QuizIntellect.ShemasIntellect import QuizintellectCreate, QuizintellectResponse

router = APIRouter(prefix="/quizintellect", tags=["Quizzes"])

@router.post("/", response_model=QuizintellectResponse)
def create_quiz(quiz: QuizintellectCreate, db: Session = Depends(get_db)):
    new_quiz = Quiz(title=quiz.title,  description=quiz.description, A=quiz.A, B=quiz.B, C=quiz.C, D=quiz.D )
    db.add(new_quiz)
    db.commit()
    db.refresh(new_quiz)
    return new_quiz

@router.get("/", response_model=List[QuizintellectResponse])
def get_quizzes(db: Session = Depends(get_db)):
    return db.query(Quiz).all()

@router.get("/{quiz_id}", response_model=QuizintellectResponse)
def get_quiz(quiz_id: int, db: Session = Depends(get_db)):
    quiz = db.query(Quiz).filter(Quiz.id == quiz_id).first()
    if not quiz:
        raise HTTPException(status_code=404, detail="Quiz not found")
    return quiz

@router.delete("/{quiz_id}")
def delete_quiz(quiz_id: int, db: Session = Depends(get_db)):
    quiz = db.query(Quiz).filter(Quiz.id == quiz_id).first()
    if not quiz:
        raise HTTPException(status_code=404, detail="Quiz not found")
    db.delete(quiz)
    db.commit()
    return {"message": "Quiz deleted successfully"}

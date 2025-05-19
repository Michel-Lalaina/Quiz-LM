from sqlalchemy import Column, Integer, String
from database import Base

class Quiz(Base):
    __tablename__ = "quizzesintellect"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(String(5), nullable=True)
    A=Column(String(255), nullable=False)
    B=Column(String(255), nullable=False)
    C=Column(String(255), nullable=False)
    D=Column(String(255), nullable=True)
    true=Column(String(4), nullable=False)


    
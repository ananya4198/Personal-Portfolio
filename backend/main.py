from pydantic import BaseModel, Field
from fastapi import FastAPI
app = FastAPI()

class ContactSubmissionCreate(BaseModel):
    """What the visitor sends in."""
    name: str = Field(min_length=1, max_length=100)
    email: str = Field(pattern=r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
    message: str = Field(min_length=1, max_length=1000)


class ContactSubmission(ContactSubmissionCreate):
    """What gets stored and returned (adds an id)."""
    id: int


# In-memory "database" (resets when the server restarts)
submissions: list[ContactSubmission] = [
    ContactSubmission(
        id=1,
        name="Test Person",
        email="test@example.com",
        message="Love your portfolio!",
    ),
    ContactSubmission(
        id=2,
        name="Sam Lee",
        email="sam@example.com",
        message="Want to collaborate on a project?",
    ),
]


# ---------- Step 5: endpoints ----------
@app.get("/contact", response_model=list[ContactSubmission])
def list_submissions(name: str | None = None):
    """Return all submissions, optionally filtered by name (case-insensitive)."""
    if name is None:
        return submissions
    return [s for s in submissions if name.lower() in s.name.lower()]


@app.get("/contact/{submission_id}", response_model=ContactSubmission)
def get_submission(submission_id: int):
    """Return one submission by id. 404 if it doesn't exist."""
    for s in submissions:
        if s.id == submission_id:
            return s
    raise HTTPException(status_code=404, detail="Submission not found")


@app.post("/contact", response_model=ContactSubmission, status_code=201)
def create_submission(data: ContactSubmissionCreate):
    """Save a new submission. 422 automatically if the data is invalid."""
    new_id = max((s.id for s in submissions), default=0) + 1
    new_submission = ContactSubmission(id=new_id, **data.model_dump())
    submissions.append(new_submission)
    return new_submission
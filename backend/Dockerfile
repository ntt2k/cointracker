FROM python:3.12-alpine

# Set the working directory inside the container
WORKDIR /code

ARG ENV

# Copy everything from the current directory to /code in the image
COPY ./backend /code

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
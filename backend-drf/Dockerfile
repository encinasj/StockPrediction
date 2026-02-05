# Usa una imagen estable y ligera
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Dependencias del sistema mínimas (quítalas si no compilas nada nativo)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copia e instala dependencias
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copia el código (al inicio tu carpeta estará vacía, pero el bind mount la pisará)
COPY . /app/

EXPOSE 8000

# En dev usaremos runserver; en prod cambia a gunicorn
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
## Локальный запуск
```bash
npm ci
npm test
npm run start
```

## Генерация SBOM
```bash
npm run sbom
# файл: sbom/bom.json
```

## Dependency-Track
```bash
docker compose up -d
# UI: http://localhost:8080
# API: http://localhost:8081
```

## CI (GitHub Actions)
Workflow запускается только на Pull Request и сохраняет артефакты на 7 дней:
- SBOM (sbom/bom.json)
- отчёты Dependency-Check (reports/dependency-check/*)


# LifeView Central Device Integration Notes

LifeView Central is designed around this flow:

```text
Medical devices / automated machines
  → authorized device adapter or bedside gateway
  → secure API / HL7 / FHIR / vendor interface
  → LifeView Central backend
  → database or demo storage
  → dashboards, mobile/PWA, alerts
  → optional AI-assisted decision-support
```

## Safety and authorization

Real hospital device integration must be authorized by the hospital, validated by clinical/biomedical teams, secured end-to-end, and implemented through vendor-supported interfaces, HL7/FHIR, gateway APIs, or approved protocols. This MVP must not be connected to real care workflows without formal clinical safety, cybersecurity, privacy, and regulatory review.

## Demo ingestion endpoint

`POST /api/device-ingest` accepts demo readings and stores them in runtime demo storage. Example payloads:

### Bedside monitor
```json
{"patientId":"P-1001","deviceId":"MON-ICU-01","sourceType":"bedside-monitor","hr":122,"spo2":91,"bp":"132/84","rr":28,"temperature":38.4,"etco2":46}
```

### Ventilator
```json
{"patientId":"P-1001","deviceId":"VENT-ICU-01","sourceType":"ventilator","spo2":93,"rr":22,"ventilator":{"mode":"SIMV","peep":6,"fio2":45,"tidalVolumeMl":430},"etco2":44}
```

### Infusion pump
```json
{"patientId":"P-1002","deviceId":"PUMP-MAT-04","sourceType":"infusion-pump","medication":"Demo fluid","rateMlHour":80,"volumeRemainingMl":250,"severity":"low"}
```

### Laboratory machine
```json
{"patientId":"P-1003","deviceId":"LAB-CBC-01","sourceType":"laboratory","test":"CBC","result":"Demo WBC elevated","severity":"medium"}
```

### Imaging system
```json
{"patientId":"P-1001","deviceId":"RAD-PACS-01","sourceType":"imaging","study":"Portable chest X-ray","status":"pending review","severity":"low"}
```

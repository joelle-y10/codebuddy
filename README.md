# CodeBuddy

Learn HTML, JavaScript, Processing, Python, C++, and Java with lessons, examples, and graded practice stations.

Progression: **CodeBuddy Basics** → clear a language → **CodeBuddy University** (advanced tracks).


## Stack

- **Client:** Vite + React + TypeScript + Monaco
- **API:** Express code runner at `POST /api/run` (Node, Python, g++, JDK)
- **Auth / progress:** Supabase (`codebuddy_*` tables)

## Setup

1. Install deps from the repo root (or `client` / `server` individually — already scaffolded).
2. Copy [`client/.env.example`](client/.env.example) → `client/.env` and set your Supabase URL + anon key (defaults point at the shared project used by StudyBuddy).
3. In the Supabase SQL editor, run [`supabase/schema.sql`](supabase/schema.sql).
4. For Java lessons, install a JDK and ensure `javac` / `java` work (or set `JAVA_HOME`).

## Run

```bash
npm run dev
```

- Web: http://localhost:5199  
- Runner API: http://localhost:8787  

## Supabase (required for cloud sync)

1. Open your Supabase project SQL editor  
2. Paste and run [`supabase/schema.sql`](supabase/schema.sql)  
3. Confirm `client/.env` has `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`  

Until the schema is applied, the site still works; progress stays in the browser and auth may error on sync tables.

## Notes

- HTML and Processing (p5.js) run in a sandboxed preview iframe.
- JavaScript, Python, C++, and Java execute on the local runner API.
- Guests keep progress in `localStorage`; signed-in users sync to Supabase.
- A portable JDK may live under `tools/` (gitignored) for Java lessons.



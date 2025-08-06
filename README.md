## 🛍️ Product Shop — modularna aplikacja frontendowa

Projekt aplikacji sklepowej zbudowany w oparciu o **feature-based architecture**. Zawiera:

- Wyszukiwarkę produktów z debounce i kontekstem globalnym.  
- Widok produktów z podziałem na sekcje.  
- Integrację z API przy użyciu `react-query`.  
- Modularną strukturę folderów ułatwiającą skalowanie i utrzymanie kodu.  

Kod oparty na **React + TypeScript + SCSS**, z naciskiem na czytelność, reużywalność komponentów i długoterminową skalowalność.

## 📁 Struktura folderów

```
src/
├── assets/           // Statyczne zasoby (ikony, obrazy, fonty)
├── components/ui/    // Reużywalne komponenty UI (np. Card, SearchInput, Logo)
├── context/          // Globalny stan aplikacji (np. SearchContext)
├── features/
│   └── products/
│       ├── components/  // Komponenty widoku produktów (np. ProductListView)
│       ├── hooks/       // Hooki specyficzne dla produktów (np. useProducts)
│       ├── services/    // Logika komunikacji z API produktów
│       └── types/       // Typy związane z produktami
├── hooks/            // Globalne hooki (np. useDebounce, useSearch)
├── layout/           // Główne komponenty layoutu aplikacji (np. AppLayout, Header)
├── lib/              // Konfiguracje i narzędzia (np. axiosInstance, queryClient, fetchData)
├── providers/        // Providerzy aplikacji (np. QueryProvider, SearchProvider)
├── styles/           // SCSS: zmienne, mixiny, reset, globalne style
├── types/            // Typy globalne aplikacji (np. Http, Request)
├── App.tsx           // Główny komponent widoku aplikacji – kontroluje logikę renderowania sekcji na podstawie stanu wyszukiwania. Korzysta z hooków i opakowuje widoki w layout.
└── main.tsx          // Punkt wejścia aplikacji – renderowanie do DOM
```

## ✨ Główne cechy

```
- 🔍 Wyszukiwanie produktów z debounce
- 🧩 Modularna struktura kodu (feature-first)
- ⚛️ React + TypeScript + React Query
- 🎨 SCSS z resetem, zmiennymi i mixinami
- 📦 Reużywalne komponenty UI
```

## 🚀 Uruchomienie lokalne

```bash
npm install
npm run dev
```

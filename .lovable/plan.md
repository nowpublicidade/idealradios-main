

## Plano de correção

### Problema 1: Links internos com caminho absoluto
Os links `href="/ideal-eletric-way"` no `Navbar.tsx` ignoram o `basename="/idealradios"` do React Router, levando o navegador para `nowpublicidade.github.io/ideal-eletric-way` (sem o `/idealradios/`).

**Solução**: Trocar `<a href="/ideal-eletric-way">` por `<Link to="/ideal-eletric-way">` do `react-router-dom` no `Navbar.tsx` (desktop e mobile).

### Problema 2: Imagem hero da IEW não aparece
Na linha 582 de `IdealElectricWay.tsx`, o `backgroundImage` usa um caminho hardcoded:
```
url('/assets/iew/hero-iew.png')
```
No GitHub Pages isso resolve para `/assets/iew/hero-iew.png` (raiz do domínio), mas o site está em `/idealradios/`. Precisa usar o helper `asset()`.

**Solução**: Trocar o valor inline do `backgroundImage` para usar a função `asset()`:
```
backgroundImage: `url('${asset("/assets/iew/hero-iew.png")}')`
```

### Arquivos alterados
1. **`src/components/Navbar.tsx`** — importar `Link` do react-router-dom; trocar 2 ocorrências de `<a href="/ideal-eletric-way">` por `<Link to="/ideal-eletric-way">`
2. **`src/pages/IdealElectricWay.tsx`** — linha 582: usar `asset()` no `backgroundImage` do hero


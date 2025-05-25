# Dealouz Api - Voucher api

## 🛠 Tech Stack

- TypeScript (Language)
- Adonis (Framework backend)
- CI / CD (Github Actions)
- Docker / DockerCompose (Development-Local)
- Unit / Functional Tests (Japa)
- MariaDB (Database)

<br /><br /><br /><br />

## 🚀 Conventions de Commit

Nous utilisons les conventions de commit pour maintenir une cohérence dans l'historique du code et faciliter le versionnement automatique avec release-please. Voici les types de commits que nous utilisons, ainsi que leur impact sur le versionnage :

- feat : Introduction d'une nouvelle fonctionnalité pour l'utilisateur. Entraîne une augmentation de la version mineure (par exemple, de 1.0.0 à 1.1.0).

- feat! : Introduction d'une nouvelle fonctionnalité avec des modifications incompatibles avec les versions antérieures (breaking changes). Entraîne une augmentation de la version majeure (par exemple, de 1.0.0 à 2.0.0).

- fix : Correction d'un bug pour l'utilisateur. Entraîne une augmentation de la version patch (par exemple, de 1.0.0 à 1.0.1).

- fix! : Correction d'un bug avec des modifications incompatibles avec les versions antérieures (breaking changes). Entraîne une augmentation de la version majeure.

- docs : Changements concernant uniquement la documentation. N'affecte pas la version.

- style : Changements qui n'affectent pas le sens du code (espaces blancs, mise en forme, etc.). N'affecte pas la version.

- refactor : Modifications du code qui n'apportent ni nouvelle fonctionnalité ni correction de bug. N'affecte pas la version.

- perf : Changements de code qui améliorent les performances. Peut entraîner une augmentation de la version mineure.

- test : Ajout ou correction de tests. N'affecte pas la version.

- chore : Changements qui ne modifient ni les fichiers source ni les tests (par exemple, mise à jour des dépendances). N'affecte pas la version.

- ci : Changements dans les fichiers de configuration et les scripts d'intégration continue (par exemple, GitHub Actions). N'affecte pas la version.

- build : Changements qui affectent le système de build ou les dépendances externes (par exemple, npm, Docker). N'affecte pas la version.

- revert : Annulation d'un commit précédent. N'affecte pas la version.

Pour indiquer qu'un commit introduit des modifications incompatibles avec les versions antérieures (breaking changes), ajoutez un ! après le type de commit, par exemple feat! ou fix!.

Pour plus de détails sur les conventions de commit, consultez : [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

<br /><br /><br /><br />

## 🔄 Unit / Functional Tests

### **General Tests:**

1. **Run all tests (unit and functional):**

   ```bash
   npm run test:all
   ```

2. **Run all tests with a watcher for changes:**
   ```bash
   npm run test:all:watch
   ```

---

### **Unit Tests:**

1. **Run only unit tests:**

   ```bash
   npm run test:unit
   ```

2. **Run unit tests with a watcher:**
   ```bash
   npm run test:unit:watch
   ```

---

### **Functional Tests:**

1. **Run only functional tests:**

   ```bash
   npm run test:functional
   ```

2. **Run functional tests with a watcher:**
   ```bash
   npm run test:functional:watch
   ```

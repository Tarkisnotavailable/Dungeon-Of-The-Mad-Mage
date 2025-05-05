# Container Tags

**Tags** are metadata or special markers applied to containers to describe specific traits, usage restrictions, or compatibility notes. They help you quickly determine how a container behaves or interacts with other systems (brewing stations, storage, add-ons, etc.).

Tags do **not** affect potion mechanics directly but **do** influence usability, crafting requirements, and automation systems.

---

##  Tag Types

Tags are broadly categorized into functional groups. Some containers may have multiple tags.

---

###  Utility Tags

| Tag          | Description                                                            |
| ------------ | ---------------------------------------------------------------------- |
| `Reusable`   | Can be cleaned and reused after use.                                   |
| `Disposable` | Designed for one-time use only.                                        |
| `Stackable`  | Can be grouped with other identical containers for inventory purposes. |
| `No-Stack`   | Unique or volatile—cannot be stacked.                                  |
| `Refillable` | Can be filled from larger containers or brewing stations.              |
| `No-Refill`  | Permanently sealed or unstable after opening.                          |

---
### Crafting & Maintenance Tags

|Tag|Description|
|---|---|
|`Simple Crafting`|Can be made with basic tools and stations.|
|`Advanced Crafting`|Requires rare materials or specialized crafting environments.|
|`Delicate`|Breaks easily under stress—requires care.|
|`Sturdy`|Resists minor drops and shaking.|

---
### Compatibility Tags

|Tag|Description|
|---|---|
|`Station-Compatible`|Can be used to bottle directly from brewing stations.|
|`Storage-Compatible`|Works with ingredient/potion storage units.|
|`Add-On Compatible`|Can be enhanced with container add-ons.|
|`Seal Required`|Requires tamper-proof seals to function properly.|

---
### Substance Tags

|Tag|Description|
|---|---|
|`Toxic-Safe`|Safe for storing corrosive or toxic potions.|
|`Heat-Resistant`|Can withstand heat or temperature changes.|
|`Magic-Resistant`|Prevents ambient magical interference.|
|`Corruption-Prone`|Vulnerable to mutating potions or dark brews.|

---
## Tag Behavior

- Tags are attached during container **creation** or **modification**.
    
- Some tags are **inherent** (based on material or shape), while others may be **applied** via crafting, upgrades, or events.
    
- If a container gains conflicting tags (e.g., `Reusable` and `Disposable`), the conflict must be resolved during crafting.
# Containers System Overview

Containers are used to store, transport, and apply potions and alchemical fluids. They play an essential role in determining potion usability, aging behavior, protection against damage or contamination, and effective application. Containers are composed of two defining traits—**Material** and **Shape**—with optional **Add-ons** and modifiers. The system is designed to be modular, scalable, and compatible with broader potioncraft mechanics.

---

## Container Base Properties

These are the core properties every container must have:

### • Portion Capacity

Indicates how many potion doses a container can hold. Portion size determines the effectiveness of a potion when consumed. For example, a potion may provide full benefits only when a full dose (1 portion) is consumed. Larger containers can store multiple portions and may require smaller containers for direct use.

### • Reusability

Specifies whether the container can be cleaned and reused. Reusable containers may require maintenance, sterilization, or purification to avoid cross-contamination.

### • Durability

Represents how resistant the container is to environmental damage (e.g., fire, crushing, magical disruption, or falling). Durability is only tested in relevant physical events such as AOE spells, explosions, or getting knocked down while carrying the container.

### • Aging Compatibility

Some containers influence how a potion ages. This can accelerate, suppress, or alter potion aging mechanics. Interaction is based on the container's material and enchantments.

### • Size Category

Defines the physical bulk of the container for inventory purposes:

- Tiny (1 portion)
    
- Small (2–3 portions)
    
- Medium (4–6 portions)
    
- Large (7–12 portions)
    
- Bulk (Storage only, not for direct consumption)

### • Direct Use

Some containers are not suitable for drinking from. Large or bulk containers must be used to fill smaller containers for individual use.

---

## Crafting & Acquisition

Containers can be obtained in the following ways:

- **Crafted**: Requires appropriate materials and tools. Special shapes or high-tier materials may require specific facilities.
    
- **Purchased**: Available from alchemists, supply vendors, or apothecaries. Price depends on material, size, and enchantments.
    
- **Looted or Found**: Rare or thematic containers may be found in dungeons, ruins, or enemy camps. These may come with unknown effects or enchantments.

---

## Container Subsystems (Located in Sub-Folders)

These will be stored and expanded separately.

### 1. Materials

Each container is crafted from a specific material. This affects durability, magical resistance, aging effects, and compatibility with potion types. (e.g., Glass, Ceramic, Bone, Abyssal Resin, Alchemized Crystal, etc.)

### 2. Shapes

Defines how the container functions (e.g., Vial, Flask, Bottle, Jug, Orb, Syringe). Some shapes are designed for specific application methods or potion types.

### 3. Add-ons

Modular upgrades applied to containers. These include things like:

- Sealing rings
    
- Inscription bands
    
- Shock-resistant padding
    
- Color-coded stoppers

These do not form the base container but enhance or specialize it.

### 4. Tags

Descriptive labels to sort, filter, or modify interaction logic. Tags include:

- “Pressure-Sealed”
    
- “Fire-Resistant”
    
- “Arcane-Linked”
    
- “Sanctified”
    
- “Unstable Contents”

Tags are applied based on material, shape, or add-on combinations.
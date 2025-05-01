# Brewing Station Rules

Brewing Stations are core infrastructure for crafting potions. They determine what tier of brews can be created, handle specific ingredient types, and influence factors such as brewing time, mishap chance, and output quality. Each station may have unique properties, upgrade paths, or environmental influences. Stations do not act in isolation—they are part of a broader crafting ecosystem and must be placed and used strategically.

---

# Station Stats

Each brewing station is defined by a set of stats that determine its capabilities and limitations:

## 1. Brewing Tier
- The maximum tier of potion this station can safely brew.
- Tier 1 stations can only brew Tier 1 potions, and so on.

## 2. Ingredient Handling
- Determines which special ingredient types the station can safely process.
- Common types include:
  - **Volatile**: Ingredients prone to mishaps if not properly stabilized.
  - **Reactive**: Ingredients that change based on adjacent components.
  - **Magical**: Arcane or divine-infused materials.
  - **Toxic**: Risk of harming the brewer or corrupting results.
  - **Organic**: Plant, beast, or living-sourced reagents.

## 3. Brewing Time Modifier
- A percentage that modifies how long brewing takes.
- e.g., `-10%` means brews take 10% less time.

## 4. Batch Size
- The number of potions that can be brewed at once (if applicable).
- Stations may also support **linked brewing**, combining outputs from multiple ingredients.

## 5. Output Control
- Affects quality consistency and success rate.
- Higher values reduce randomness in outcomes.

## 6. Mishap Resistance
- Reduces the chance of adverse outcomes (Mishaps).
- Mishaps are not yet fully defined, but represent dangerous or chaotic brewing failures.

## 7. Durability
- Measures station integrity and resistance to damage, decay, or magical feedback.

## 8. Maintenance Requirement
- Defines upkeep frequency or costs.
- Some stations degrade with use or age.

## 9. Upgrade Slots
- The number of Magical Tool Aids that can be attached.
- Tool Aids offer special interactions or automation but are limited by station capacity.

## 10. Special Properties
- Unique passive features tied to the station’s origin or design.
- They do not simulate or fulfill potion requirements, but **enhance effects** under certain conditions.

### Examples:
- **Lunar-Aligned**: Enhances lunar-tagged ingredients when brewed under proper moon phase.
- **Bloodbound**: Improves potency of blood-based ingredients, but increases mishap chance.
- **Eldritch Resonance**: Eldritch-tagged reagents gain extra effects but may trigger corruption.

> These properties are rare and should meaningfully shape brewing strategy, not simplify it.

## 11. Environmental Effects
- Environmental placement may influence the station’s behavior.

#### Examples:
- **Leyline Proximity**: Reduces Mishap Chance and improves magical output.
- **Storm Exposure**: Buffs elemental ingredients (lightning, wind, water) during storms.
- **Sanctified Ground**: Improves brewing control for holy-aligned potions.
- **Underground Placement**: Boosts decay, fungal, or mineral-based brews.

> These effects are **external** and **contextual**, not intrinsic. They reward smart placement but do not bypass ingredient or condition requirements.

---

## Design Notes

- Stations are **modular**: Upgrades, placement, and linked systems will expand their function.
- **Automation and acceleration** must be carefully regulated (e.g., Magical Tool Aids or Storage-based aging, not stations).
- Mishap mechanics, Tool Aids, and special tags will be expanded in dedicated sections.

---

## Template (for future station entries)

```markdown
### [Station Name]
- **Brewing Tier**: #
- **Ingredient Handling**: [Types]
- **Brewing Time Modifier**: ±X%
- **Batch Size**: #
- **Output Control**: #
- **Mishap Resistance**: #
- **Durability**: #
- **Maintenance Requirement**: [value or interval]
- **Upgrade Slots**: #
- **Special Properties**: [Description]
- **Environmental Effects**: [Description]
```

### Themes (Preliminary Concept)

Stations may have themes (e.g., Infernal, Verdant, Alchemical, Clockwork) that influence which ingredients or recipes synergize well. These will be fleshed out later and tied to potion flavor and specialization paths.

Test
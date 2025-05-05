# Brewing Station Rules

Brewing Stations are core infrastructure for crafting potions. They determine what tier of brews can be created, handle specific ingredient types, and influence factors such as brewing time, mishap chance, and output quality. Each station may have unique properties, upgrade paths, or environmental influences. Stations do not act in isolation—they are part of a broader crafting ecosystem and must be placed and used strategically.

---

## Station Stats

Every brewing station is defined by a collection of stats that reflect its capabilities and limitations:

---

## Brewing Tier

Determines the highest brewing tier the station can support. Tier 1 stations can only handle Tier 1 potions, and so on. Higher-tier stations are more complex and typically require rarer materials or construction methods.

---

## Ingredient Handling

Indicates what types of advanced ingredients the station can safely work with. Some ingredient types are unstable or sensitive and require specialized handling protocols.

- _Volatile_: Prone to explosive or hazardous reactions unless stabilized.
	
- _Reactive_: Their properties shift depending on adjacent reagents.
	
- _Magical_: Infused with arcane, divine, or other supernatural forces.
	
- _Toxic_: Dangerous to handle, may corrupt results or harm the brewer.
	
- _Organic_: Derived from living or once-living sources; can spoil or mutate.

---

## Brewing Time Modifier

Affects the base brewing time by a percentage. A station with `-15%` time modifier shortens the brew process by that amount, while `+20%` would increase it. This interacts with potion tier, reagent complexity, and catalyst properties.

---

## Batch Size

The number of potions a station can brew simultaneously. Some stations support _linked brewing_, where multiple potion outputs are derived from a single, more powerful recipe or shared essence.

---

## Output Control

A measure of how precisely the station regulates the brewing process. Higher control means more consistent potion quality and less randomness in output strength, traits, or stability.

---

## Mishap Resistance

Reduces the chance of dangerous failures. Mishaps may cause flawed brews, backlashes, corrupted potions, or other chaotic effects. Mishap rules are under development, but this stat will directly counteract brewing hazards.

---

## Durability

Indicates how resistant the station is to physical wear, magical stress, environmental decay, or explosions. Durable stations require less maintenance and survive longer in unstable surroundings.

---

## Maintenance Requirement

Describes how often the station needs to be cleaned, repaired, recharged, or magically tuned. Neglecting maintenance may increase mishap chances, slow brewing time, or reduce potion quality.

---

## Upgrade Slots

Determines how many **Magical Tool Aids** can be attached to this station. Tool Aids enhance functionality but are restricted by this limit to avoid excessive automation or stacking effects. The nature and type of Tool Aids will be defined separately.

---

## Special Properties

These are passive traits unique to the station’s build, materials, or origin. They don’t simulate potion conditions, but they enhance brewing when certain requirements are met. These properties should promote creative brewing strategies rather than trivialize core mechanics.  
Examples include:
	
- _Lunar-Aligned_: Boosts effectiveness of ingredients that depend on lunar phases.
	
- _Bloodbound_: Amplifies blood- or sacrifice-based components but increases mishap risk.
	
- _Eldritch Resonance_: Reagents tagged as eldritch gain powerful side effects, at the cost of potential corruption.

---

## Environmental Effects

Some stations are influenced by where they are placed. These external bonuses do not override brewing requirements but reward thoughtful location and ambient synergy.  
Examples include:
	
- _Leyline Proximity_: Enhances magical potency and mishap resistance.
	
- _Storm Exposure_: Boosts elemental ingredients during storms (lightning, wind, rain).
	
- _Sanctified Ground_: Improves stability for holy or healing potions.
    
- _Underground Placement_: Enhances decay-based, fungal, or mineral brews.
---

## Design Notes

- Stations are designed to be **modular**, with support for upgrades, contextual placement bonuses, and interaction with other parts of the alchemy system.
    
- Acceleration mechanics, such as aging, should **not** be handled by brewing stations. These will be implemented through dedicated **storage systems** instead.
    
- Mishap mechanics, Magical Tool Aids, and complex ingredient interactions will be expanded in their respective rule sections.
    
- Brewing stations will eventually be grouped into **station types** and **themes**, reflecting their function, cultural origin, or magical focus. These will influence stat distribution and upgrade paths.

---

### Themes

Each Brewing Station may be aligned with a **Theme**—a magical or conceptual identity that influences how it handles ingredients, brewing processes, and final potion effects. Themes are not purely cosmetic: they guide synergy, enhance brewing potential, and interact with ingredients, catalysts, and MTAs in unique ways.

#### Theme Effects

Themes influence several brewing aspects:

- **Ingredient Synergy**: Certain ingredients resonate with specific Themes, granting bonuses such as reduced brewing time, increased potency, improved stability, or bonus effects.
    
- **Catalyst and Additive Response**: Some Themes amplify or suppress specific catalysts or additives. For example, a _Clockwork_ station might benefit from powdered metals or time-based catalysts, while a _Verdant_ station favors fresh herbs or mutagenic spores.
    
- **Potion Identity Bias**: Thematic alignment makes brewing certain types of potions easier or more potent. While all recipes are possible at any station, working _with_ a station’s Theme provides mechanical advantages.
    
- **Mishap Flavoring**: Failed brews reflect the station’s Theme. For example, a mishap in a _Necrotic_ station may create a cursed potion, while one in a _Lunar_ station could cause a dreamlike hallucination or time skip.
    
- **Theme-Specific MTAs**: Some Magical Tool Aids may require or operate best within stations of a matching Theme.

#### Example Themes

- **Infernal** – Fire, corruption, blood rituals, destructive magic
    
- **Verdant** – Plants, healing, mutation, regeneration
    
- **Alchemical** – Transmutation, balance, elemental reactions
    
- **Clockwork** – Time, precision, automation, constructs
    
- **Necrotic** – Death, poison, undeath, entropy
    
- **Lunar** – Dreams, illusions, psychic effects, phases
    
- **Abyssal** – Madness, chaos, mutation, deep magic
    
- **Solar** – Purity, cleansing, divine radiance
    
- **Draconic** – Elemental fury, ancient power, hoarding
    
- **Runic** – Stability, structure, control, ritual focus

Themes are not fixed at creation in all systems. Some stations may **develop or shift** toward a Theme based on repeated use of aligned ingredients, ambient exposure (e.g., abyssal rift, celestial altar), or magical infusion. These **Infused Themes** may be temporary or permanent depending on the context.

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

---


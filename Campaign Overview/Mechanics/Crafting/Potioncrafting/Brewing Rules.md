A deep, modular alchemy system designed for exploration, experimentation, and mastery. Brewing combines **catalysts**, **reagents**, and **tools** at various **stations** to produce potions with distinct effects and behaviors. Outcomes depend on **player skill**, **brewing tier**, **ingredient interaction**, and **external modifiers**.

---
## Core Brewing Process

Brewing a potion requires **three components**:  
**Catalyst**, **Reagent**, and optionally, one or more **Additives**.  
Each step must be carefully handled, and mistakes can lead to failed brews or even magical mishaps.

1. **Choose a Catalyst**
    - Catalysts determine the potion’s **brewing tier**, **maximum complexity**, and **base difficulty**.
        
    - Each Catalyst also limits the number of **Additives** that can be safely used.
	
2. **Add a Reagent**
    - The Reagent determines the **core effect** of the potion.
        
    - Each Reagent has its own **difficulty rating**, which contributes to the final DC.
	
3. **(Optional) Add Additives**
    - Additives are optional ingredients that modify, enhance, or stabilize the brew.
        
    - Each Additive has its own properties and may raise or lower the brewing DC based on its effect.
        
    - The number of Additives allowed is determined by the **Catalyst**.
	
4. **Check for Special Requirements**
    - Some ingredients may require unique conditions to function properly (e.g., ley lines, moon phases, altitude, terrain type, or ambient temperature).
        
    - These are listed in the ingredient’s entry and must be met for successful brewing.
	
5. **Prepare the Station**
    - Brewing requires an appropriate **Alchemical Station** of the correct tier (see table below).
	
6. **Crafting Check**
    - Make an Intelligence (Alchemy Tools) check.
        
    - The **final DC** is determined by the combined difficulty of Catalyst + Reagent + Additives.
        
    - Failure may result in a mishap depending on ingredients (see Mishap Tables).
	
7. **Record Brewing Time**
    - Brewing time is based on the **Potion Tier** and will vary accordingly.
	
8. **Label and Store**
    - Successfully brewed potions should be labeled. Unlabeled or misidentified potions may cause unintended effects.

---
## Ingredient Types

|Type|Purpose|Required?|Affects DC?|
|---|---|---|---|
|**Catalyst**|Defines the potion's core tier and stability|✅|✅ (Heavily)|
|**Reagent**|Determines the potion’s main effect or function|✅|✅ (Heavily)|
|**Additive**|Optional ingredients that modify effects or ease|❌|Variable (+/-)|

- **Catalyst**: Sets the **Tier** of the potion and how many additives it can support.
- **Reagent**: Sets the **primary effect** (healing, resistance, invisibility, etc.).
- **Additive**: Provides **bonuses, side effects, flavor changes**, or **stabilization** effects. Each Additive has its own rules for whether it makes the potion harder or easier to brew.
	✦ The number of Additives you can include is determined by the **Catalyst's capacity**.  
	✦ Additives are never required but add significant depth to potioncraft.  
	✦ Additives are listed with specific properties and notes in the Ingredient Index.

---
## Brewing Tier, Mastery & Station Table

The **Catalyst** determines the **Potion Tier**, which sets the brewing complexity and requirements:

| Tier | Potion Quality | Minimum Mastery Level | Required Station Tier |
| ---- | -------------- | --------------------- | --------------------- |
| 1    | Simple         | Novice                | Tier 1                |
| 2    | Basic          | Novice                | Tier 1                |
| 3    | Advanced       | Adept                 | Tier 2                |
| 4    | Expert         | Expert                | Tier 3                |
| 5    | Rare/Master    | Master                | Tier 4                |
| 6    | Legendary      | Master (Specialized)  | Tier 5                |

- **Mastery Level** reflects your skill specialization in potioncraft (see Mastery System).
- **Station Tier** reflects the sophistication of your alchemical lab setup.
- **Brewing Time** is for a single potion. Batch production may increase time (see Mass Production).
---
## Crafting Check

To brew a potion, roll a **Crafting Check**:

`d20 + Proficiency (if proficient) + Intelligence or Wisdom + Tool Bonus + Additive Modifier + Mastery Modifier (if any)`

- **Success**: The potion is brewed as intended.
    
- **Failure**:
    
    - Slight Fail (miss by 1–2): Weakened potion or partial effect
        
    - Major Fail (miss by 3–5): Potion becomes volatile or unstable
        
    - Catastrophic Fail (miss by 6+): Mishap — roll on reagent-specific table or cause brewing incident

- **DC is set dynamically** based on the **Catalyst** and **Reagent** combination.
- **Additives may increase or reduce** the DC depending on complexity or stabilizing effects.
- Some brews may require additional conditions (see below).
---
## Special Requirements

Certain ingredients or combinations may have **external conditions**:

- **Environmental Factors**: Ley lines, natural springs, magical storms, or cursed locations.
- **Timing**: Moon phases, solar eclipses, specific seasons or dates.
- **Geographic Zones**: Volcanic regions, deep forests, ocean cliffs, etc.
- **Ritual Components**: Specific runes, chants, or even rare fuels.

These are listed per ingredient and must be satisfied before brewing.

---
## Mishaps

When a potion **fails critically**, it causes unexpected results. Mishaps are **tier-specific** and **reagent-specific**, and the base mishap table is being expanded into its own modular system. For now, see the **Mishap Table (General)** file or relevant **Reagent File** for mishap effects.

If your Crafting Check fails by a margin or due to conflicting ingredients:

- Refer to the **Reagent’s Mishap Table**
    
- Mishaps can cause side effects, mutations, flammable reactions, or worse
    
- Certain Additives or Mastery levels may **reduce the chance** or severity of mishaps

---
## Mass Production 

When crafting **Tier 1–3** potions, if your setup exceeds the minimum requirements:

- You may brew a **batch** (e.g., 4–6 doses) instead of one
    
- Requires at least one tier **higher Station**, and **two tiers** for Tier 3 batches
    
- Increases brewing time and mishap risk slightly
    
- Only available with **Adept+ Mastery**

---
## Skill Challenges (Optional, Advanced)

Rare Reagents or high-stakes brews may require **skill challenges**:

- Skill checks could include Arcana, Nature, Medicine, Survival, etc.
    
- Can be used to **handle volatile materials**, or **salvage near-failures**
    
- Requires **Expert or Master-level Mastery**

---
## Brewing Time

Brewing Time is determined primarily by the **Catalyst**, with further modifications from the **Reagent** and any **Additives** used. This system ensures that every potion’s brewing process is uniquely affected by its components.

- **Catalyst** provides the **base brewing time** (e.g., 30 minutes, 1 hour, 6 hours, etc.).
    
- **Reagent** modifies that time based on its nature (e.g., +15 minutes for volatile reagents, −10 minutes for fast-reacting herbs).
    
- **Additives** also apply minor modifiers (e.g., +5 minutes for a stabilizer, −5 minutes for a time-saving enhancer).

---
### Example:

> A potion using a _Tier 2 Catalyst_ (Base Time: 1 hour), a _volatile Reagent_ (+15 min), and two Additives (−5 min and +5 min respectively) results in a **Total Brewing Time** of **1 hour and 15 minutes**.

- Every ingredient entry (Catalyst, Reagent, Additive) will list its **Brewing Time Modifier**.
    
- Additive modifiers are **not cumulative beyond Catalyst capacity** — exceeding the limit may cause time to increase drastically or provoke instability.
    
- Some ingredients may reduce time **at the cost of stability**, and vice versa.
    

> 📌 _Note:_ Brewing Time applies to a **single dose**. Batch brewing (see _Mass Production_) increases this time proportionally and adds risk factors.

---
## Optional Modifiers

Alchemists can experiment using additional optional mechanics:
- **Double Catalyst Brewing** – at high tiers, multiple catalysts may be used for layered effects.
- **Intentional Aging** – leaving potions to age for strategic purposes (see Aging System).
- **Reagent Interactions** – combining multiple reagents for hybrid or chaotic effects.
- **Controlled Environments** – custom chambers to slow or accelerate aging mid-brew.
- **Custom Lab Scripts** – using enchanted scrolls or rituals to influence outcomes.

---
## Labeling and Identification

Each finished potion should be assigned:

- **Label ID**: Includes base catalyst/reagent shorthand and batch number.
- **Tier Tag**: Reflecting strength.
- **Brew Stage**: Fresh, Settled, Aged, etc.
- **Effect Summary**: For clarity, especially in bulk brewing.

Players without alchemical training may require an **Identify Spell**, **Tasting**, or **Arcana/Medicine Check** to learn a potion’s effects if it lacks a clear label.

---
## Notes & Reminders

- Not all brewing failures are disasters—some may lead to unexpected discoveries.
    
- Characters can catalog new ingredient interactions over time.
    
- Some reagents or catalysts may have hidden effects only discoverable through experimentation or story events.
A deep, modular alchemy system designed for exploration, experimentation, and reward. Players combine **reagents** and **catalysts** using appropriate **tools** at brewing **stations** to craft potions of various **tiers**, with results influenced by skill, tier, and station quality.

---

## Core Components
#### 🔹**Catalyst:**
A substance that defines the _form_, _theme_, or _nature_ of the potion (e.g., elixir, oil, gas). Catalysts influence **how** the potion behaves and how it is administered. Some catalysts may also interact elementally.
##### Role:
- Defines the form (e.g., drinkable, applied to skin, inhaled, crushed, etc.)
- Boost the effect or change the nature of the reagent.
- Modify aging time of the reagent
- Add special properties to the final product.
##### Properties:
- **Substance Type**: Determine how the potion can be applied. (Drink, Touch, Injection, Vapor, etc.)
- **Effect Boost**: Increase the effect of the reagent. (Duration, power, area, etc.)
- **Aging Modifier**: Modifies the reagents aging properties. (Increase/Decrease each aging stage separately by a flat amount or multiply it.)
- **Special Modifiers**: Some Catalysts may interact with reagents on special ways.

**Examples:**
- Dragon Saliva – boosts potency, adds fire element
- Spiritvine Sap – turns potion into a gas
- Moonshade Oil – makes the potion persistent over time
#### 🔸**Reagent:**
Defines the **effect** or **purpose** of the potion. These are gathered from flora, fauna, minerals, or magical sources.
##### Role:
- Determine the main effect (Healing, Poison, Sleep, Strength, Illusion, etc.)
- Have an intrinsic aging phases (in days)
##### Properties:
- Effect: (What the potion does)
- Base Aging Phases:

Examples:
- Fireroot – offensive fire effect
- Chillcap – ice resistance
- Nightbloom – enhances stealth or vision at night

	**Crafting Result = Catalyst + Reagent + Skill Check**

---
## Brewing Tiers
| Tier | Name       | DC Range | Time Required | Effect Scope                                 | Notes                     |
| ---- | ---------- | -------- | ------------- | -------------------------------------------- | ------------------------- |
| I    | Simple     | 10–12    | 1–2 hours     | Minor effects (e.g. 1d4 healing, mild buffs) | Beginner-friendly         |
| II   | Common     | 13–14    | 2–4 hours     | Resistance, healing, or skill buffs          | Requires basic skill      |
| III  | Advanced   | 15–16    | 4–6 hours     | Potent or multi-effect potions               | Requires proficiency      |
| IV   | Rare       | 17–18    | 6–12 hours    | Mimics spells or has unique mechanics        | Requires rare components  |
| V    | Masterwork | 19–20+   | 1–3 days      | Legendary effects, persistent enchantments   | Requires magical facility |
	Higher tiers may require multiple catalysts or reagents and/or magical components.
	Each tier requires according mastery level. 

---
## Brewing Stations
|Station|Max Tier|Description|Notes|
|---|---|---|---|
|**Field Kit**|I–II|Portable set with basic tools|+2 DC, 25% mishap on failure|
|**Alchemist Table**|IV|Standard indoor lab|Stable, no DC penalty|
|**Arcane Distillery**|V|Rare magical facility, ancient or custom-built|-2 DC, no mishap risk|

---
## Crafting Check
1. Alchemy Check** = D20 + relevant tool proficiency + INT (or custom Alchemy stat)
2. Compare vs **DC of Tier**
3. Determine outcome:

| Result      | Effect                                                        |
| ----------- | ------------------------------------------------------------- |
| Pass        | Potion is successfully brewed with expected effects           |
| Fail by 1–4 | Potion is flawed – reduced duration, halved potency, unstable |
| Fail by 5+  | Potion fails or causes mishap – DM may roll on Mishap Table   |

---
## Mishap Table (Sample for Tier I–III)
| d6  | Effect                                         |
| --- | ---------------------------------------------- |
| 1   | Potion explodes – minor fire damage (1d6)      |
| 2   | Potion turns inert                             |
| 3   | Potion has opposite effect                     |
| 4   | Minor illusion appears when potion is consumed |
| 5   | Potion glows uncontrollably                    |
| 6   | Attracts nearby beasts or fae for 1 hour       |
	Mishap table should scale with tier (e.g., Tier V mishaps might alter reality or summon creatures).

---

---

# Aging System

**Overview:** When a potion is brewed, it may suffer some changes overtime. Be it beneficial or detrimental. What becomes of a potion when it ages is determined by its ingredients, as every ingredient react different to aging.

---

## Aging Stages

|**Stage**|**Timeframe (Standard)**|
|---|---|
|**Fresh**|Brewed to 24 hours|
|**Settled**|1–3 days|
|**Aged**|4–14 days|
|**Overaged**|15–40 days|
|**Spoiled**|41+ days
**Note:** These are baseline numbers. Environmental and container conditions will modify the speed of aging.

---
## Containers & Aging Modifiers
Containers significantly affect the potion's aging speed. Some can preserve, accelerate, or warp aging.

|**Container Type**|**Aging Rate Modifier**|**Notes**|
|---|---|---|
|**Glass Vial**|x1.0 (Normal)|Default container. Transparent; vulnerable to heat/light.|
|**Dark Glass Vial**|x0.8|Slows aging. Blocks light. Favored for volatile brews.|
|**Ceramic Flask**|x1.1|Slightly accelerates aging. Porous, reacts with humidity.|
|**Metal Flask (Tin)**|x0.9|Slows aging; dulls magical reaction. Risk of metallic taint in brew.|
|**Lead-Lined Flask**|x0.5|Strong preservation. Expensive and heavy. Used for high-grade potions.|
|**Organic Container (Gourd, Wood)**|x1.3|Speeds up aging. Might add mild unpredictable qualities.|
|**Runed Crystal Phial**|Variable (x0.5–2.0)|Magical container. Adjustable aging rate. Extremely rare.|
*Add-ons like cork quality, wax seals, or rune-etched caps can further modify behavior.*

---
## Environmental Factors
Environmental conditions also affect the aging rate, stacking with the container’s modifier.

| **Environment**                      | **Aging Rate Mod** | **Notes**                                      |
| ------------------------------------ | ------------------ | ---------------------------------------------- |
| **Cool & Dark (Cellar)**             | x0.8               | Ideal storage. Preserves aging stage longer.   |
| **Room Temp (Indoor)**               | x1.0               | Neutral environment. Standard rate.            |
| **Hot & Dry (Desert)**               | x1.5               | Speeds up aging. Can cause spoilage early.     |
| **Humid & Warm (Jungle)**            | x1.3               | Speeds up aging. Increases instability.        |
| **Refrigerated (Magical or Icebox)** | x0.6               | Great for slowing down aging.                  |
| **Near Magical Radiation (Leyline)** | Variable           | May warp aging rate randomly or unpredictably. |
## Magical Tools for Aging Aid
Powerful or wealthy alchemists may use **enchanted tools** to control aging precisely.

**Examples:**

|**Item**|**Effect**|
|---|---|
|**Aging Runeplate**|Apply it to a shelf; modifies aging rate by x0.8 or x1.2 depending on rune.|
|**Temporal Infusion Seal**|Freezes potion at current stage for 1 month.|
|**Decanter of Suspension**|Stops aging entirely until uncorked.|
|**Aging Amplifier Box**|Multiplies potion aging rate by x3 — high risk, high reward.|

---
## How to Calculate Aging Time

**Aging Days = Base Days × Container Mod × Environment Mod**
For example:
- A potion in a **ceramic flask** (x1.1) kept in a **jungle** (x1.3) ages at a rate of: `1.1 × 1.3 = x1.43` → meaning it will reach the **Aged** stage in ~10 days instead of 14.

---
# Intentional Aging
Some potions **improve or transform** with age — but only when aged under carefully controlled conditions.
## Alchemy Cabinets & Potion Cellars
These are **dedicated storage environments** designed to slow or guide potion aging safely.

|**Storage Setup**|**Bonus**|
|---|---|
|**Labeled Wooden Rack**|Grants +2 on checks to identify potion age.|
|**Underground Cellar**|Applies Cool & Dark modifiers by default.|
|**Wax-Sealed Compartments**|Reduces spoilage risk by 20%.|
|**Potion Organizer (Magical)**|Automatically adjusts to ideal rate. Expensive.|
	**Player Hook:** Building a proper storage facility with materials, time, and gold can allow longer-lasting potions and rarer aging effects.

---
## Accidental Aging
Improper storage or forgotten potions can lead to **spoilage, transformation, or even hazardous effects**.

|**Risk Factor**|**Result**|
|---|---|
|Left near heat source|Potion spoils early or bursts (Con save if held)|
|Forgotten in humid room|Gains fungal traits (roll on mild mutation table if later reintroduced)|
|Stored in unsealed container|Potion evaporates or loses potency|
You can roll for **spoilage outcome**:
- **1–3**: Potion spoils, becomes inert.
- **4–5**: Side effects (e.g., nausea, minor illusion).
- **6**: Potion mutates — roll a surprise effect or have it do the _opposite_ of intended.

---
# Labeling Systems
Labeling isn't just roleplay flavor — it helps **track potion origins, batches, and stage**.
#### Standard Labels Include:
- **Date of Brewing**
- **Catalyst & Reagent Used**
- **Intended Result**
- **Storage Conditions**
- **Expected Aging Outcome** (e.g. “Improves after 7 days”)

You can turn labeling into a **mechanical benefit**:
- **Properly Labeled Potions**: Gain +2 bonus on checks to recall purpose/combination.
- **Unlabeled/Misplaced**: May require Intelligence (Alchemy) check to identify (DC 10–15).

---
## Keeping Track of Aging
When a potion is crafted it will be given an ID based on its ingredients and a note will be created to keep track of every potion crafted.
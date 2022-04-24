import { Storage } from '@capacitor/storage';

export enum DamageType
{
    Slashing,
    Piercing,
    Bludgeoning,
    SlashingMagic,
    PiercingMagic,
    BludgeoningMagic,
    Poison,
    Acid,
    Fire,
    Cold,
    Radiant,
    Necrotic,
    Lightning,
    Thunder,
    Force,
    Psychic,
}

export enum Conditions
{
    Blinded,
    Exhaustion,
    Incapacitated,
    Petrified,
    Restrained,
    Charmed,
    Frightened,
    Invisible,
    Poisoned,
    Stunned,
    Deafened,
    Grappled,
    Paralyzed,
    Prone,
    Unconscious
}

export enum Skills
{
    Strength,
    Athletics,
    Dexterity,
    Acrobatics,
    SleightOfHand,
    Stealth,
    Intelligence,
    Arcana,
    History,
    Investigation,
    Nature,
    Religion,
    Wisdom,
    AnimalHandling,
    Insight,
    Medicine,
    Perception,
    Survival,
    Charisma,
    Deception,
    Intimidation,
    Performance,
    Persuasion,
}

export class BattlefieldModel
{
    constructor() { }

    public async createEntity(
        sName: string,
        iHealth: number,
        ArmorClass: number,
        iStrength: number,
        iDexterity: number,
        iConstitution: number,
        iIntelligence: number,
        iWisdom: number,
        iCharisma: number,
        iSpeed: number,
        aSkillModifiers: Map<Skills, number>,
        iProficiencyBonus: number,
        aDamageResistances: Array<DamageType>,
        aDamageImmunities: Array<DamageType>,
        aConditionImmunities: Array<Conditions>)
    {
        //TODO: Fix this
        // await Storage.configure({
        //     group: "Entities"
        // });

        let oEntity = new Entity(sName, iHealth, ArmorClass, iStrength, iDexterity, iConstitution, iIntelligence, iWisdom, iCharisma, iSpeed, aSkillModifiers, iProficiencyBonus, aDamageResistances, aDamageImmunities, aConditionImmunities);
        this.storeEntity(oEntity);
    }

    private async storeEntity(oEntity: Entity)
    {
        return new Promise((resolve, reject) =>
        {
            this.getLastEntityId().then(async (iLastEntityId: number) =>
            {

                let iEntityId = iLastEntityId ?? 0;
                iEntityId++;
                console.warn(iEntityId);


                //TODO: Add TableName?
                await Storage.set({
                    key: iEntityId.toString(),
                    value: JSON.stringify(oEntity),
                });

                resolve;
            })
        });


    }

    public async getEntity()
    {

    }

    public async getAllEntities()
    {
        return new Promise(async (resolve, reject) =>
        {
            this.getAllEntityKeys().then((aKeys: Array<number>) =>
            {
                console.warn(aKeys);
                let aEntities = [];
                aKeys.forEach(async iKey =>
                {
                    await Storage.get({
                        key: iKey.toString()
                    }).then(aEntity =>
                    {
                        aEntities.push(JSON.parse(aEntity["value"]));
                    });
                    resolve(aEntities);
                });
                //TODO: Return entities
            })
        });
    }

    public async getAllEntityKeys()
    {
        return new Promise(async (resolve, reject) =>
        {
            await Storage.keys().then(aKeys =>
            {
                let aKeysAsInts = aKeys["keys"].map((i) => Number(i));
                resolve(aKeysAsInts)
            });
        });
    }

    public async getLastEntityId()
    {
        return new Promise(async (resolve, reject) =>
        {
            this.getAllEntityKeys().then((aKeys: Array<number>) =>
            {
                if (aKeys.length > 0)
                    resolve(Math.max(...aKeys));

                resolve(0);
            })
        });
    }
}

export class Player
{
    //TODO: Add player
}

export class Entity
{
    public sName: string;
    public iHealth: number;
    public ArmorClass: number;
    public iStrength: number;
    public iDexterity: number;
    public iConstitution: number;
    public iIntelligence: number;
    public iWisdom: number;
    public iCharisma: number;
    public iSpeed: number;
    public aSkillModifiers: Map<Skills, number>;
    public iProficiencyBonus: number;
    public aDamageResistances: Array<DamageType>;
    public aDamageImmunities: Array<DamageType>;
    public aConditionImmunities: Array<Conditions>;

    //TODO: Add actions
    constructor(
        _sName: string,
        _iHealth: number,
        _ArmorClass: number,
        _iStrength: number,
        _iDexterity: number,
        _iConstitution: number,
        _iIntelligence: number,
        _iWisdom: number,
        _iCharisma: number,
        _iSpeed: number,
        _aSkillModifiers: Map<Skills, number>,
        _iProficiencyBonus: number,
        _aDamageResistances: Array<DamageType>,
        _aDamageImmunities: Array<DamageType>,
        _aConditionImmunities: Array<Conditions>)
    {
        this.sName = _sName;
        this.iHealth = _iHealth;
        this.ArmorClass = _ArmorClass;
        this.iStrength = _iStrength;
        this.iDexterity = _iDexterity;
        this.iConstitution = _iConstitution;
        this.iIntelligence = _iIntelligence;
        this.iWisdom = _iWisdom;
        this.iCharisma = _iCharisma;
        this.iSpeed = _iSpeed;
        this.aSkillModifiers = _aSkillModifiers;
        this.iProficiencyBonus = _iProficiencyBonus;
        this.aDamageResistances = _aDamageResistances;
        this.aDamageImmunities = _aDamageImmunities;
        this.aConditionImmunities = _aConditionImmunities;
    }
}

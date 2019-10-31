/**
 * An enum defining the available symbol types.
 * @private
 */
export enum SymbolType {
    Invalid,
    External,
    Slack,
    Error,
    Dummy,
}

/**
 * An internal class representing a symbol in the solver.
 * Note: this was called Symbol before, but was renamed to avoid
 * conflicting with the existing Symbol/symbol type in ES2015+.
 * @private
 */
export class SolverSymbol {

    private readonly _id: number;
    private readonly _type: SymbolType;

    /**
     * Construct a new Symbol
     *
     * @param [type] The type of the symbol.
     * @param [id] The unique id number of the symbol.
     */
    constructor(type: SymbolType, id: number) {
        this._id = id;
        this._type = type;
    }

    /**
     * Returns the unique id number of the symbol.
     */
    public id(): number {
        return this._id;
    }

    /**
     * Returns the type of the symbol.
     */
    public type(): SymbolType {
        return this._type;
    }
}

/**
 * A static invalid symbol
 * @private
 */
export const
    INVALID_SYMBOL = new SolverSymbol(SymbolType.Invalid, -1);

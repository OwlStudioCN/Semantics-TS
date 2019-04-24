/* eslint-disable @typescript-eslint/camelcase,prettier/prettier,@typescript-eslint/no-explicit-any,@typescript-eslint/explicit-member-accessibility,@typescript-eslint/no-angle-bracket-type-assertion,@typescript-eslint/ban-types,@typescript-eslint/explicit-function-return-type */
import { Production } from './Production';
import { Node } from './Node';
import { Symbol } from './Symbol';
import { ErrorProduction } from './ErrorProduction';
import { Token } from './Token';
import { Id } from './Id';

export class GrammarCompiler {
  productions: Production[];

  symbols: Symbol[];

  ids: Id[];

  codes: string[];

  public getIds(): Id[] {
    return this.ids;
  }

  public getCodes(): string[] {
    return this.codes;
  }

  public constructor() {
    if (this.productions === undefined) this.productions = null;
    if (this.symbols === undefined) this.symbols = null;
    if (this.ids === undefined) this.ids = null;
    if (this.codes === undefined) this.codes = null;
    this.ids = <any>[];
    this.codes = <any>[];
    this.symbols = <any>[];
    this.productions = <any>[];
    this.CreateNewProduction();
    this.getFirst();
    this.getFollow();
    this.getSelect();
  }

  public CreateNewProduction() {
    /* add */
    this.productions.push(new Production(0, 'S', 'func', 'S'));
    /* add */
    this.productions.push(new Production(1, 'S'));
    /* add */
    this.productions.push(
      new Production(2, 'func', 'type', 'id', '(', 'params', ')', 'func_body'),
    );
    /* add */
    this.productions.push(
      new Production(3, 'func', 'VOID', 'id', '(', 'params', ')', 'func_body'),
    );
    /* add */
    this.productions.push(new Production(4, 'params'));
    /* add */
    this.productions.push(new Production(5, 'params', 'type', 'id', "params'"));
    /* add */
    this.productions.push(new Production(6, "params'"));
    /* add */
    this.productions.push(
      new Production(7, "params'", ',', 'type', 'id', "params'"),
    );
    /* add */
    this.productions.push(new Production(8, 'func_body', ';'));
    /* add */
    this.productions.push(new Production(9, 'func_body', 'block'));
    /* add */
    this.productions.push(
      new Production(10, 'block', '{', 'def_stmts', 'stmts', '}'),
    );
    /* add */
    this.productions.push(
      new Production(11, 'def_stmts', 'def_stmt', 'def_stmts'),
    );
    /* add */
    this.productions.push(new Production(12, 'def_stmts'));
    /* add */
    this.productions.push(
      new Production(
        13,
        'def_stmt',
        'type',
        'id',
        'M13_2',
        'array',
        'M13_4',
        'vars',
        ';',
      ),
    );
    /* add */
    this.productions.push(new Production(13, 'M13_2'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M13_2', 'N'));
    /* add */
    this.productions.push(new Production(13, 'M13_4'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M13_4', 'N'));
    /* add */
    this.productions.push(new Production(14, 'array', 'M14_1'));
    /* add */
    this.productions.push(new Production(14, 'M14_1'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M14_1', 'N'));
    /* add */
    this.productions.push(
      new Production(15, 'array', '[', 'int', ']', 'M15_4', 'array', 'M15_6'),
    );
    /* add */
    this.productions.push(new Production(15, 'M15_4'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M15_4', 'N'));
    /* add */
    this.productions.push(new Production(15, 'M15_6'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M15_6', 'N'));
    /* add */
    this.productions.push(new Production(16, 'vars'));
    /* add */
    this.productions.push(
      new Production(17, 'vars', ',', 'id', 'M17_3', 'array', 'M17_5', 'vars'),
    );
    /* add */
    this.productions.push(new Production(17, 'M17_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M17_3', 'N'));
    /* add */
    this.productions.push(new Production(17, 'M17_5'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M17_5', 'N'));
    /* add */
    this.productions.push(new Production(18, 'stmts'));
    /* add */
    this.productions.push(new Production(19, 'stmts', 'stmt', 'stmts'));
    /* add */
    this.productions.push(new Production(20, 'stmt', 'E', ';'));
    /* add */
    this.productions.push(new Production(21, 'stmt', ';'));
    /* add */
    this.productions.push(new Production(22, 'stmt', 'block'));
    /* add */
    this.productions.push(new Production(23, 'stmt', 'RETURN', 'e', ';'));
    /* add */
    this.productions.push(new Production(24, 'stmt', 'CONTINUE', ';'));
    /* add */
    this.productions.push(new Production(25, 'stmt', 'BREAK', ';'));
    /* add */
    this.productions.push(
      new Production(
        26,
        'stmt',
        'IF',
        '(',
        'E',
        ')',
        'M26_5',
        'stmt',
        'M26_7',
        'else',
        'M26_9',
      ),
    );
    /* add */
    this.productions.push(new Production(26, 'M26_5'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M26_5', 'N'));
    /* add */
    this.productions.push(new Production(26, 'M26_7'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M26_7', 'N'));
    /* add */
    this.productions.push(new Production(26, 'M26_9'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M26_9', 'N'));
    /* add */
    this.productions.push(
      new Production(27, 'stmt', 'SWITCH', '(', 'E', ')', '{', 'cases', '}'),
    );
    /* add */
    this.productions.push(
      new Production(28, 'stmt', 'DO', 'stmt', 'WHILE', '(', 'E', ')', ';'),
    );
    /* add */
    this.productions.push(new Production(30, 'else', 'ELSE', 'stmt'));
    /* add */
    this.productions.push(new Production(29, 'else'));
    /* add */
    this.productions.push(new Production(31, 'cases', 'case', 'cases'));
    /* add */
    this.productions.push(new Production(32, 'cases'));
    /* add */
    this.productions.push(
      new Production(33, 'case', 'CASE', 'const', ':', 'stmts'),
    );
    /* add */
    this.productions.push(new Production(34, 'case', 'DEFAULT', ':', 'stmts')) >
      0;
    /* add */
    this.productions.push(new Production(35, 'e'));
    /* add */
    this.productions.push(new Production(36, 'e', 'E'));
    /* add */
    this.productions.push(
      new Production(
        37,
        'stmt',
        'FOR',
        '(',
        'e',
        ';',
        'e',
        ';',
        'e',
        ')',
        'stmt',
      ),
    );
    /* add */
    this.productions.push(
      new Production(
        38,
        'stmt',
        'WHILE',
        '(',
        'M38_3',
        'E',
        ')',
        'M26_5',
        'stmt',
        'M38_7',
      ),
    );
    /* add */
    this.productions.push(new Production(38, 'M38_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M38_3', 'N'));
    /* add */
    this.productions.push(new Production(38, 'M38_7'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M38_7', 'N'));
    /* add */
    this.productions.push(new Production(39, 'factor', '+', 'factor'));
    /* add */
    this.productions.push(
      new Production(40, 'E', 'value', 'M52_2', 'comp', 'M52_4'),
    );
    /* add */
    this.productions.push(new Production(41, 'comp'));
    /* add */
    this.productions.push(new Production(42, 'comp', '<', 'value', 'M42_4')) >
      0;
    /* add */
    this.productions.push(new Production(42, 'M42_4'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M42_4', 'N'));
    /* add */
    this.productions.push(new Production(43, 'comp', '<=', 'value', 'M43_4')) >
      0;
    /* add */
    this.productions.push(new Production(43, 'M43_4'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M43_4', 'N'));
    /* add */
    this.productions.push(new Production(44, 'comp', '>', 'value', 'M44_4')) >
      0;
    /* add */
    this.productions.push(new Production(44, 'M44_4'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M44_4', 'N'));
    /* add */
    this.productions.push(new Production(45, 'comp', '>=', 'value', 'M45_4')) >
      0;
    /* add */
    this.productions.push(new Production(45, 'M45_4'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M45_4', 'N'));
    /* add */
    this.productions.push(new Production(46, 'comp', '==', 'value', 'M46_4')) >
      0;
    /* add */
    this.productions.push(new Production(46, 'M46_4'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M46_4', 'N'));
    /* add */
    this.productions.push(new Production(47, 'comp', '!=', 'value', 'M47_4')) >
      0;
    /* add */
    this.productions.push(new Production(47, 'M47_4'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M47_4', 'N'));
    /* add */
    this.productions.push(
      new Production(48, 'value', 'item', 'M52_2', 'items', 'M52_4'),
    );
    /* add */
    this.productions.push(new Production(49, 'items'));
    /* add */
    this.productions.push(
      new Production(50, 'items', '+', 'item', 'M50_3', 'items', 'M52_4'),
    );
    /* add */
    this.productions.push(new Production(50, 'M50_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M50_3', 'N'));
    /* add */
    this.productions.push(
      new Production(51, 'items', '-', 'item', 'M51_3', 'items', 'M52_4'),
    );
    /* add */
    this.productions.push(new Production(51, 'M51_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M51_3', 'N'));
    /* add */
    this.productions.push(
      new Production(52, 'item', 'factor', 'M52_2', 'factors', 'M52_4'),
    );
    /* add */
    this.productions.push(new Production(52, 'M52_2'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M52_2', 'N'));
    /* add */
    this.productions.push(new Production(52, 'M52_4'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M52_4', 'N'));
    /* add */
    this.productions.push(new Production(53, 'factors'));
    /* add */
    this.productions.push(
      new Production(54, 'factors', '*', 'factor', 'M54_3', 'factors', 'M52_4'),
    );
    /* add */
    this.productions.push(new Production(54, 'M54_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M54_3', 'N'));
    /* add */
    this.productions.push(
      new Production(55, 'factors', '/', 'factor', 'M55_3', 'factors', 'M52_4'),
    );
    /* add */
    this.productions.push(new Production(55, 'M55_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M55_3', 'N'));
    /* add */
    this.productions.push(
      new Production(56, 'factors', '%', 'factor', 'M56_3', 'factors', 'M52_4'),
    );
    /* add */
    this.productions.push(new Production(56, 'M56_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M56_3', 'N'));
    /* add */
    this.productions.push(new Production(57, 'factor', '!', 'factor', 'M57_3'));
    /* add */
    this.productions.push(new Production(58, 'M57_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M57_3', 'N'));
    /* add */
    this.productions.push(
      new Production(58, 'factor', '++', 'factor', 'M58_3'),
    );
    /* add */
    this.productions.push(new Production(58, 'M58_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M58_3', 'N'));
    /* add */
    this.productions.push(
      new Production(59, 'factor', '--', 'factor', 'M59_3'),
    );
    /* add */
    this.productions.push(new Production(59, 'M59_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M59_3', 'N'));
    /* add */
    this.productions.push(new Production(60, 'factor', '(', 'E', ')', 'M60_4'));
    /* add */
    this.productions.push(new Production(60, 'M60_4'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M60_4', 'N'));
    /* add */
    this.productions.push(
      new Production(61, 'factor', 'id', 'M61_2', 'call', 'M61_4'),
    );
    /* add */
    this.productions.push(new Production(61, 'M61_2'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M61_2', 'N'));
    /* add */
    this.productions.push(new Production(61, 'M61_4'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M61_4', 'N'));
    /* add */
    this.productions.push(new Production(62, 'factor', 'const', 'M62_2'));
    /* add */
    this.productions.push(new Production(62, 'M62_2'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M62_2', 'N'));
    /* add */
    this.productions.push(
      new Production(63, 'call', 'M63_1', 'array', 'M63_3'),
    );
    /* add */
    this.productions.push(new Production(63, 'M63_1'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M63_1', 'N'));
    /* add */
    this.productions.push(new Production(63, 'M63_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M63_3', 'N'));
    /* add */
    this.productions.push(new Production(64, 'call', '(', 'Es', ')'));
    /* add */
    this.productions.push(new Production(65, 'Es', 'E', "Es'"));
    /* add */
    this.productions.push(new Production(66, "Es'", ',', 'E', "Es'"));
    /* add */
    this.productions.push(new Production(67, "Es'"));
    /* add */
    this.productions.push(new Production(68, 'type', 'CHAR', 'M68_2'));
    /* add */
    this.productions.push(new Production(68, 'M68_2'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M68_2', 'N'));
    /* add */
    this.productions.push(new Production(69, 'type', 'INT', 'M69_2'));
    /* add */
    this.productions.push(new Production(69, 'M69_2'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M69_2', 'N'));
    /* add */
    this.productions.push(new Production(70, 'type', 'LONG', 'M70_2'));
    /* add */
    this.productions.push(new Production(70, 'M70_2'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M70_2', 'N'));
    /* add */
    this.productions.push(new Production(71, 'type', 'SHORT', 'M71_2'));
    /* add */
    this.productions.push(new Production(71, 'M71_2'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M71_2', 'N'));
    /* add */
    this.productions.push(new Production(72, 'type', 'FLOAT', 'M72_2'));
    /* add */
    this.productions.push(new Production(72, 'M72_2'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M72_2', 'N'));
    /* add */
    this.productions.push(new Production(73, 'type', 'DOUBLE', 'M73_2'));
    /* add */
    this.productions.push(new Production(73, 'M73_2'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M73_2', 'N'));
    /* add */
    this.productions.push(new Production(74, 'const', 'int', 'M74_2'));
    /* add */
    this.productions.push(new Production(75, 'const', 'float', 'M74_2'));
    /* add */
    this.productions.push(new Production(76, 'const', 'double', 'M74_2'));
    /* add */
    this.productions.push(new Production(77, 'const', 'char', 'M74_2'));
    /* add */
    this.productions.push(new Production(74, 'M74_2'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M74_2', 'N'));
    /* add */
    this.productions.push(new Production(78, 'comp', '=', 'value', 'M78_3')) >
      0;
    /* add */
    this.productions.push(new Production(78, 'M78_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M78_3', 'N'));
    /* add */
    this.productions.push(new Production(79, 'comp', '+=', 'value', 'M79_3')) >
      0;
    /* add */
    this.productions.push(new Production(79, 'M79_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M79_3', 'N'));
    /* add */
    this.productions.push(new Production(80, 'comp', '-=', 'value', 'M80_3')) >
      0;
    /* add */
    this.productions.push(new Production(80, 'M80_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M80_3', 'N'));
    /* add */
    this.productions.push(new Production(81, 'comp', '*=', 'value', 'M81_3')) >
      0;
    /* add */
    this.productions.push(new Production(81, 'M81_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M81_3', 'N'));
    /* add */
    this.productions.push(new Production(82, 'comp', '/=', 'value', 'M82_3')) >
      0;
    /* add */
    this.productions.push(new Production(82, 'M82_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M82_3', 'N'));
    /* add */
    this.productions.push(new Production(83, 'comp', '%=', 'value', 'M83_3')) >
      0;
    /* add */
    this.productions.push(new Production(83, 'M83_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M83_3', 'N'));
    /* add */
    this.productions.push(new Production(84, 'factor', '-', 'factor', 'M84_3'));
    /* add */
    this.productions.push(new Production(84, 'M84_3'));
    /* add */
    this.symbols.push(new Symbol(-1, 'M84_3', 'N'));
    /* add */
    this.productions.push(new Production(85, 'const', 'string'));
    /* add */
    this.productions.push(new Production(86, 'params', 'VOID'));
    /* add */
    this.symbols.push(new Symbol(0, 'S', 'N'));
    /* add */
    this.symbols.push(new Symbol(1, 'func', 'N'));
    /* add */
    this.symbols.push(new Symbol(2, 'params', 'N'));
    /* add */
    this.symbols.push(new Symbol(3, "params'", 'N'));
    /* add */
    this.symbols.push(new Symbol(4, 'func_body', 'N'));
    /* add */
    this.symbols.push(new Symbol(5, 'block', 'N'));
    /* add */
    this.symbols.push(new Symbol(6, 'def_stmts', 'N'));
    /* add */
    this.symbols.push(new Symbol(7, 'def_stmt', 'N'));
    /* add */
    this.symbols.push(new Symbol(8, 'array', 'N'));
    /* add */
    this.symbols.push(new Symbol(9, 'vars', 'N'));
    /* add */
    this.symbols.push(new Symbol(10, 'stmts', 'N'));
    /* add */
    this.symbols.push(new Symbol(11, 'stmt', 'N'));
    /* add */
    this.symbols.push(new Symbol(12, 'else', 'N'));
    /* add */
    this.symbols.push(new Symbol(13, 'cases', 'N'));
    /* add */
    this.symbols.push(new Symbol(14, 'case', 'N'));
    /* add */
    this.symbols.push(new Symbol(15, 'e', 'N'));
    /* add */
    this.symbols.push(new Symbol(16, 'E', 'N'));
    /* add */
    this.symbols.push(new Symbol(17, 'comp', 'N'));
    /* add */
    this.symbols.push(new Symbol(18, 'value', 'N'));
    /* add */
    this.symbols.push(new Symbol(19, 'items', 'N'));
    /* add */
    this.symbols.push(new Symbol(20, 'item', 'N'));
    /* add */
    this.symbols.push(new Symbol(21, 'factors', 'N'));
    /* add */
    this.symbols.push(new Symbol(22, 'factor', 'N'));
    /* add */
    this.symbols.push(new Symbol(23, 'call', 'N'));
    /* add */
    this.symbols.push(new Symbol(24, 'Es', 'N'));
    /* add */
    this.symbols.push(new Symbol(25, "Es'", 'N'));
    /* add */
    this.symbols.push(new Symbol(26, 'type', 'N'));
    /* add */
    this.symbols.push(new Symbol(27, 'const', 'N'));
    /* add */
    this.symbols.push(new Symbol(28, 'string', 'T'));
    /* add */
    this.symbols.push(new Symbol(29, 'id', 'T'));
    /* add */
    this.symbols.push(new Symbol(30, '(', 'T'));
    /* add */
    this.symbols.push(new Symbol(31, ')', 'T'));
    /* add */
    this.symbols.push(new Symbol(32, 'VOID', 'T'));
    /* add */
    this.symbols.push(new Symbol(33, '{', 'T'));
    /* add */
    this.symbols.push(new Symbol(34, '}', 'T'));
    /* add */
    this.symbols.push(new Symbol(35, ',', 'T'));
    /* add */
    this.symbols.push(new Symbol(36, ';', 'T'));
    /* add */
    this.symbols.push(new Symbol(37, '=', 'T'));
    /* add */
    this.symbols.push(new Symbol(38, 'IF', 'T'));
    /* add */
    this.symbols.push(new Symbol(39, 'SWITCH', 'T'));
    /* add */
    this.symbols.push(new Symbol(40, 'DO', 'T'));
    /* add */
    this.symbols.push(new Symbol(41, 'WHILE', 'T'));
    /* add */
    this.symbols.push(new Symbol(42, 'ELSE', 'T'));
    /* add */
    this.symbols.push(new Symbol(43, 'CASE', 'T'));
    /* add */
    this.symbols.push(new Symbol(44, ':', 'T'));
    /* add */
    this.symbols.push(new Symbol(45, 'DEFAULT', 'T'));
    /* add */
    this.symbols.push(new Symbol(46, 'FOR', 'T'));
    /* add */
    this.symbols.push(new Symbol(47, '<', 'T'));
    /* add */
    this.symbols.push(new Symbol(48, '<=', 'T'));
    /* add */
    this.symbols.push(new Symbol(49, '>', 'T'));
    /* add */
    this.symbols.push(new Symbol(50, '>=', 'T'));
    /* add */
    this.symbols.push(new Symbol(51, '==', 'T'));
    /* add */
    this.symbols.push(new Symbol(52, '!=', 'T'));
    /* add */
    this.symbols.push(new Symbol(53, '+', 'T'));
    /* add */
    this.symbols.push(new Symbol(54, '-', 'T'));
    /* add */
    this.symbols.push(new Symbol(55, '*', 'T'));
    /* add */
    this.symbols.push(new Symbol(56, '/', 'T'));
    /* add */
    this.symbols.push(new Symbol(57, '%', 'T'));
    /* add */
    this.symbols.push(new Symbol(58, '!', 'T'));
    /* add */
    this.symbols.push(new Symbol(59, '++', 'T'));
    /* add */
    this.symbols.push(new Symbol(60, '--', 'T'));
    /* add */
    this.symbols.push(new Symbol(61, 'CHAR', 'T'));
    /* add */
    this.symbols.push(new Symbol(62, 'INT', 'T'));
    /* add */
    this.symbols.push(new Symbol(63, 'LONG', 'T'));
    /* add */
    this.symbols.push(new Symbol(64, 'SHORT', 'T'));
    /* add */
    this.symbols.push(new Symbol(65, 'FLOAT', 'T'));
    /* add */
    this.symbols.push(new Symbol(66, 'DOUBLE', 'T'));
    /* add */
    this.symbols.push(new Symbol(67, 'int', 'T'));
    /* add */
    this.symbols.push(new Symbol(68, 'float', 'T'));
    /* add */
    this.symbols.push(new Symbol(69, 'double', 'T'));
    /* add */
    this.symbols.push(new Symbol(70, 'char', 'T'));
    /* add */
    this.symbols.push(new Symbol(71, '+=', 'T'));
    /* add */
    this.symbols.push(new Symbol(72, '-=', 'T'));
    /* add */
    this.symbols.push(new Symbol(73, '*=', 'T'));
    /* add */
    this.symbols.push(new Symbol(74, '/=', 'T'));
    /* add */
    this.symbols.push(new Symbol(75, '%=', 'T'));
    /* add */
    this.symbols.push(new Symbol(76, 'RETURN', 'T'));
    /* add */
    this.symbols.push(new Symbol(77, 'CONTINUE', 'T'));
    /* add */
    this.symbols.push(new Symbol(78, 'BREAK', 'T'));
    /* add */
    this.symbols.push(new Symbol(79, '[', 'T'));
    /* add */
    this.symbols.push(new Symbol(80, ']', 'T'));
    /* add */
    this.symbols.push(new Symbol(81, '#', 'T'));
  }

  public getFirst() {
    let flag = true;
    while (flag) {
      {
        for (let i = 0; i < /* size */ <number>this.productions.length; i++) {
          {
            let temp: Production = /* get */ this.productions[i];
            let left: string = temp.getLeft();
            let right: string[] = temp.getRight();
            let left_symbol: Symbol = this.getSymbol(left);
            for (let j = 0; j < right.length; j++) {
              {
                let right_symbol: Symbol = this.getSymbol(right[j]);
                for (
                  let k = 0;
                  k < /* size */ <number>right_symbol.first.length;
                  k++
                ) {
                  {
                    let element: string = /* get */ right_symbol.first[k];
                    if (!left_symbol.has('first', element)) {
                      /* add */
                      left_symbol.first.push(element);
                      flag = false;
                    }
                  }
                }
                if (!this.canBeBlank(right[j])) break;
              }
            }
          }
        }
        flag = !flag;
      }
    }
  }

  public getFollow() {
    let flag: boolean;
    /* add */
    this.getSymbol('S').follow.push('#');
    flag = true;
    while (flag) {
      {
        for (let i = 0; i < /* size */ <number>this.productions.length; i++) {
          {
            let temp: Production = /* get */ this.productions[i];
            let left: string = temp.getLeft();
            let right: string[] = temp.getRight();
            if (right.length === 0) continue;
            let left_symbol: Symbol = this.getSymbol(left);
            for (let j = 0; j < right.length - 1; j++) {
              {
                let right_symbol: Symbol = this.getSymbol(right[j]);
                if (right_symbol.isTerminal()) continue;
                let follow_symbol: Symbol = this.getSymbol(right[j + 1]);
                for (
                  let k = 0;
                  k < /* size */ <number>follow_symbol.first.length;
                  k++
                ) {
                  {
                    let element: string = /* get */ follow_symbol.first[k];
                    if (!right_symbol.has('follow', element)) {
                      /* add */
                      right_symbol.follow.push(element);
                      flag = false;
                    }
                  }
                }
                let blank = true;
                for (let k: number = j + 1; k < right.length; k++) {
                  {
                    if (this.canBeBlank(right[k])) {
                      if (k + 1 < right.length) {
                        let rr_symbol: Symbol = this.getSymbol(right[k + 1]);
                        for (
                          let m = 0;
                          m < /* size */ <number>rr_symbol.first.length;
                          m++
                        ) {
                          {
                            let element: string = /* get */ rr_symbol.first[m];
                            if (!right_symbol.has('follow', element)) {
                              /* add */
                              right_symbol.follow.push(element);
                              flag = false;
                            }
                          }
                        }
                      }
                    } else {
                      blank = false;
                      break;
                    }
                  }
                }
                if (blank) {
                  for (
                    let k = 0;
                    k < /* size */ <number>left_symbol.follow.length;
                    k++
                  ) {
                    {
                      let element: string = /* get */ left_symbol.follow[k];
                      if (!right_symbol.has('follow', element)) {
                        /* add */
                        right_symbol.follow.push(element);
                        flag = false;
                      }
                    }
                  }
                }
              }
            }
            let last_symbol: Symbol = this.getSymbol(right[right.length - 1]);
            if (last_symbol.isTerminal()) continue;
            for (
              let k = 0;
              k < /* size */ <number>left_symbol.follow.length;
              k++
            ) {
              {
                let element: string = /* get */ left_symbol.follow[k];
                if (!last_symbol.has('follow', element)) {
                  /* add */
                  last_symbol.follow.push(element);
                  flag = false;
                }
              }
            }
          }
        }
        flag = !flag;
      }
    }
  }

  public getSelect() {
    for (let i = 0; i < /* size */ <number>this.productions.length; i++) {
      {
        let production: Production = /* get */ this.productions[i];
        if (production.getRight().length === 0) {
          let select: string[] = <any>[];
          let follow: string[] = this.getSymbol(production.getLeft()).follow;
          for (let j = 0; j < /* size */ <number>follow.length; j++) {
            {
              /* add */
              select.push(/* get */ follow[j]);
            }
          }
          production.setSelect(select);
        } else {
          let select: string[] = <any>[];
          let right: string[] = production.getRight();
          let blank = true;
          for (let j = 0; j < right.length; j++) {
            {
              let first: string[] = this.getSymbol(right[j]).first;
              for (let k = 0; k < /* size */ <number>first.length; k++) {
                {
                  /* add */
                  select.push(/* get */ first[k]);
                }
              }
              if (!this.canBeBlank(right[j])) {
                blank = false;
                break;
              }
            }
          }
          if (blank) {
            let follow: string[] = this.getSymbol(production.getLeft()).follow;
            for (let k = 0; k < /* size */ <number>follow.length; k++) {
              {
                if (
                  !/* contains */ (
                    select.indexOf(<any>/* get */ follow[k]) >= 0
                  )
                )
                  /* add */ select.push(/* get */ follow[k]);
              }
            }
          }
          production.setSelect(select);
        }
      }
    }
  }

  public getProductions(): Production[] {
    return this.productions;
  }

  public getProductionsByLeft(left: string): Production[] {
    let ret: Production[] = <any>[];
    for (let i = 0; i < /* size */ <number>this.productions.length; i++) {
      {
        let temp: Production = /* get */ this.productions[i];
        if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(temp.getLeft(), left)) /* add */ ret.push(temp);
      }
    }
    return ret;
  }

  /*private*/
  canBeBlank(name: string): boolean {
    for (let i = 0; i < /* size */ <number>this.productions.length; i++) {
      {
        let temp: Production = /* get */ this.productions[i];
        if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(temp.getLeft(), name)) {
          let right: string[] = temp.getRight();
          if (right.length === 0) return true;
          let flag = true;
          for (let j = 0; j < right.length; j++) {
            {
              if (!this.canBeBlank(right[j])) {
                flag = false;
                break;
              }
            }
          }
          if (flag) return true;
        }
      }
    }
    return false;
  }

  /*private*/
  getProductionToBlank(name: string): Production {
    for (let i = 0; i < /* size */ <number>this.productions.length; i++) {
      {
        let temp: Production = /* get */ this.productions[i];
        if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(temp.getLeft(), name)) {
          let right: string[] = temp.getRight();
          if (right.length === 0) return temp;
          let flag = true;
          for (let j = 0; j < right.length; j++) {
            {
              if (!this.canBeBlank(right[j])) {
                flag = false;
                break;
              }
            }
          }
          if (flag) return temp;
        }
      }
    }
    return null;
  }

  public getSymbols(): Symbol[] {
    return this.symbols;
  }

  getSymbol(name: string): Symbol {
    for (let i = 0; i < /* size */ <number>this.symbols.length; i++) {
      {
        let temp: Symbol = /* get */ this.symbols[i];
        if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(temp.getName(), name)) return temp;
      }
    }
    return null;
  }

  /*private*/
  getId(name: string): Id {
    for (let i = 0; i < /* size */ <number>this.ids.length; i++) {
      {
        if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(/* get */ this.ids[i].getName(), name)) return /* get */ this.ids[i];
      }
    }
    return null;
  }

  public analysis(token_list: Token[]): Production[] {
    let offset = 0;
    let tno = 0;
    let bno = 0;
    /* add */
    token_list.push(new Token('#', null));
    let stack: Symbol[] = <any>[];
    let node_stack: Node[] = <any>[];
    let pro_list: Production[] = <any>[];
    /* push */
    stack.push(this.getSymbol('#'));
    /* push */
    stack.push(this.getSymbol('S'));
    /* push */
    node_stack.push(new Node('S', null));
    let pos = 0;
    let line = 1;
    while (pos < /* size */ <number>token_list.length) {
      {
        let token: Token = /* get */ token_list[pos];
        let input_symbol: Symbol = this.getSymbol(token.getName());
        if (input_symbol == null) {
          if (/* equals */ <any>((o1: any, o2: any) => {
              if (o1 && o1.equals) {
                return o1.equals(o2);
              } else {
                return o1 === o2;
              }
            })(token.getName(), 'ENTER')) {
            line++;
          } else if (/* equals */ <any>((o1: any, o2: any) => {
              if (o1 && o1.equals) {
                return o1.equals(o2);
              } else {
                return o1 === o2;
              }
            })(token.getName(), 'ERROR')) {
            let err_pro: ErrorProduction = new ErrorProduction(
              -1,
              /* get */ stack[/* size */ <number>stack.length - 1].getName(),
              /* get */ stack[/* size */ <number>stack.length - 1].getName(),
            );
            err_pro.setError(
              "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                token.getSource() +
                "' at line " +
                line,
            );
            err_pro.setSolution(
              "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                token.getSource() +
                "'",
            );
            /* add */
            pro_list.push(err_pro);
          } else {
            let err_pro: ErrorProduction = new ErrorProduction(
              -1,
              /* get */ stack[/* size */ <number>stack.length - 1].getName(),
              /* get */ stack[/* size */ <number>stack.length - 1].getName(),
            );
            err_pro.setError(
              "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                token.getName() +
                "' at line " +
                line,
            );
            err_pro.setSolution(
              "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                token.getName() +
                "'",
            );
            /* add */
            pro_list.push(err_pro);
          }
          pos++;
          continue;
        }
        let leftest: Symbol = null;
        let left_node: Node = null;
        try {
          leftest = /* pop */ stack.pop();
          if (!leftest.isTerminal()) left_node = /* pop */ node_stack.pop();
        } catch (e) {
          let err_pro: ErrorProduction = new ErrorProduction(-1, '#', '#');
          err_pro.setError(
            '\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd',
          );
          err_pro.setSolution(
            '\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd',
          );
          /* add */
          pro_list.push(err_pro);
          break;
        }
        if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M68_2')) {
          /* put */
          left_node.getFather().attribute['type'] = 'char';
          /* put */
          left_node.getFather().attribute['length'] = '1';
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M69_2')) {
          /* put */
          left_node.getFather().attribute['type'] = 'int';
          /* put */
          left_node.getFather().attribute['length'] = '4';
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M70_2')) {
          /* put */
          left_node.getFather().attribute['type'] = 'long';
          /* put */
          left_node.getFather().attribute['length'] = '4';
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M71_2')) {
          /* put */
          left_node.getFather().attribute['type'] = 'short';
          /* put */
          left_node.getFather().attribute['length'] = '2';
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M72_2')) {
          /* put */
          left_node.getFather().attribute['type'] = 'float';
          /* put */
          left_node.getFather().attribute['length'] = '4';
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M73_2')) {
          /* put */
          left_node.getFather().attribute['type'] = 'double';
          /* put */
          left_node.getFather().attribute['length'] = '8';
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M13_2')) {
          let father: Node = left_node.getFather(); /* get */
          /* put */
          father.sons[1].attribute['name'] = /* get */ token_list[
            pos - 1
          ].getSource(); /* get */
          /* put */
          father.sons[1].attribute['type'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'type',
          ); /* get */
          /* put */
          father.sons[1].attribute['length'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'length',
          ); /* get */
          /* put */
          father.sons[1].attribute['dimension'] = '0';
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M15_4')) {
          let father: Node = left_node.getFather();
          let num: number = /* parseInt */ parseInt(
            /* get */ token_list[pos - 2].getValue(),
          );
          let father_dimension: number = /* parseInt */ parseInt(
            /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
              father.attribute,
              'dimension',
            ),
          ); /* get */
          /* put */
          father.sons[0].attribute['name'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            father.attribute,
            'name',
          ); /* get */
          /* put */
          father.sons[0].attribute['type'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'type');
          if (
            /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
              father.attribute,
              'length',
            ) != null
          )
            /* put */ /* get */ father.sons[0].attribute['length'] =
              /* parseInt */ parseInt(
                /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
                  father.attribute,
                  'length',
                ),
              ) *
                num +
              ''; /* get */
          /* put */
          father.sons[0].attribute['dimension'] =
            father_dimension + 1 + ''; /* get */
          /* put */
          father.sons[0].attribute['arr' + father_dimension] = '' + num;
          for (let i = 0; i < father_dimension; i++) {
            {
              /* put */ /* get */
              father.sons[0].attribute['arr' + i] =
                '' +
                /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
                  father.attribute,
                  'arr' + i,
                );
            }
          }
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M14_1')) {
          let father: Node = left_node.getFather();
          if (
            /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
              father.attribute,
              'length',
            ) != null
          ) {
            let length: number = /* parseInt */ parseInt(
              /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
                father.attribute,
                'length',
              ),
            );
            let id: Id = new Id(
              /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
                father.attribute,
                'name',
              ),
              /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
                father.attribute,
                'type',
              ),
              offset,
              length,
            );
            offset += length;
            let dimension: number = /* parseInt */ parseInt(
              /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
                father.attribute,
                'dimension',
              ),
            );
            for (let i = 0; i < dimension; i++) {
              {
                /* add */
                id.arr_list.push(
                  /* parseInt */ parseInt(
                    /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
                      father.attribute,
                      'arr' + i,
                    ),
                  ),
                );
              }
            }
            /* add */
            this.ids.push(id);
          } else {
            let name: string = /* get */ ((m, k) =>
              m[k] === undefined ? null : m[k])(father.attribute, 'name');
            let id: Id = this.getId(name);
            if (id == null) {
              continue;
            }
            let type: string = id.getType();
            let dimension: number = /* size */ <number>id.arr_list.length;
            let ofst = 0;
            let width = 1;
            for (let i: number = dimension - 1; i >= 0; i--) {
              {
                let arr: number = /* parseInt */ parseInt(
                  /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
                    father.attribute,
                    'arr' + i,
                  ),
                );
                ofst += arr * width;
                width *= /* get */ id.arr_list[i];
              }
            }
            if (/* equals */ <any>((o1: any, o2: any) => {
                if (o1 && o1.equals) {
                  return o1.equals(o2);
                } else {
                  return o1 === o2;
                }
              })(type, 'int') || /* equals */ <any>((o1: any, o2: any) => {
                if (o1 && o1.equals) {
                  return o1.equals(o2);
                } else {
                  return o1 === o2;
                }
              })(type, 'long') || /* equals */ <any>((o1: any, o2: any) => {
                if (o1 && o1.equals) {
                  return o1.equals(o2);
                } else {
                  return o1 === o2;
                }
              })(type, 'float')) ofst *= 4;
            else if (/* equals */ <any>((o1: any, o2: any) => {
                if (o1 && o1.equals) {
                  return o1.equals(o2);
                } else {
                  return o1 === o2;
                }
              })(type, 'double')) ofst *= 8;
            else if (/* equals */ <any>((o1: any, o2: any) => {
                if (o1 && o1.equals) {
                  return o1.equals(o2);
                } else {
                  return o1 === o2;
                }
              })(type, 'short')) ofst *= 2;
            if (/* size */ <number>id.arr_list.length > 0) {
              let t: string = 't' + tno++;
              /* add */
              this.codes.push(t + ' := ' + name + '[' + ofst + ']');
              /* put */
              father.attribute['value'] = t;
              /* put */
              father.attribute['val'] = name + '[' + ofst + ']';
            } else {
              /* put */
              father.attribute['value'] = name;
            }
          }
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M13_4')) {
          let father: Node = left_node.getFather(); /* get */
          /* put */
          father.sons[2].attribute['type'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'type',
          ); /* get */
          /* put */
          father.sons[2].attribute['length'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'length',
          );
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M17_3')) {
          let father: Node = left_node.getFather(); /* get */
          /* put */
          father.sons[0].attribute['type'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            father.attribute,
            'type',
          ); /* get */
          /* put */
          father.sons[0].attribute['length'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            father.attribute,
            'length',
          ); /* get */
          /* put */
          father.sons[0].attribute['name'] = /* get */ token_list[
            pos - 1
          ].getSource(); /* get */
          /* put */
          father.sons[0].attribute['dimension'] = '0';
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M17_5')) {
          let father: Node = left_node.getFather(); /* get */
          /* put */
          father.sons[1].attribute['type'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'type',
          ); /* get */
          /* put */
          father.sons[1].attribute['length'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'length',
          );
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M74_2')) {
          let father: Node = left_node.getFather();
          /* put */
          father.attribute['value'] = /* get */ token_list[pos - 1].getValue();
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M57_3')) {
          let father: Node = left_node.getFather();
          let f1: string = 'b' + bno++;
          let f2: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          /* add */
          this.codes.push(f1 + ' := ~' + f2);
          /* put */
          father.attribute['value'] = f1;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M58_3')) {
          let father: Node = left_node.getFather();
          let f1: string = 't' + tno++;
          let f2: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          /* add */
          this.codes.push(f1 + ' := ' + f2 + ' + 1');
          /* put */
          father.attribute['value'] = f1;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M59_3')) {
          let father: Node = left_node.getFather();
          let f1: string = 't' + tno++;
          let f2: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          /* add */
          this.codes.push(f1 + ' := ' + f2 + ' - 1');
          /* put */
          father.attribute['value'] = f1;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M84_3')) {
          let father: Node = left_node.getFather();
          let f1: string = 't' + tno++;
          let f2: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          /* add */
          this.codes.push(f1 + ' := 0 - ' + f2);
          /* put */
          father.attribute['value'] = f1;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M60_4')) {
          let father: Node = left_node.getFather();
          /* put */
          father.attribute['value'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M61_2')) {
          let father: Node = left_node.getFather(); /* get */
          /* put */
          father.sons[0].attribute['name'] = /* get */ token_list[
            pos - 1
          ].getSource();
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M63_1')) {
          let father: Node = left_node.getFather(); /* get */
          /* put */
          father.sons[0].attribute['name'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            father.attribute,
            'name',
          ); /* get */
          /* put */
          father.sons[0].attribute['dimension'] = '0';
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M15_6') || /* equals */ <any>((
            o1: any,
            o2: any,
          ) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M63_3') || /* equals */ <any>((
            o1: any,
            o2: any,
          ) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M61_4') || /* equals */ <any>((
            o1: any,
            o2: any,
          ) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M62_2')) {
          let father: Node = left_node.getFather();
          /* put */
          father.attribute['value'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          /* put */
          father.attribute['val'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'val',
          );
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M52_2')) {
          let father: Node = left_node.getFather(); /* get */
          /* put */
          father.sons[1].attribute['value'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          ); /* get */
          /* put */
          father.sons[1].attribute['val'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'val',
          );
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M54_3')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          let t: string = 't' + tno++;
          /* add */
          this.codes.push(t + ' := ' + inh + ' * ' + value); /* get */
          /* put */
          father.sons[1].attribute['value'] = t;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M55_3')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          let t: string = 't' + tno++;
          /* add */
          this.codes.push(t + ' := ' + inh + ' / ' + value); /* get */
          /* put */
          father.sons[1].attribute['value'] = t;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M56_3')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          let t: string = 't' + tno++;
          /* add */
          this.codes.push(t + ' := ' + inh + ' % ' + value); /* get */
          /* put */
          father.sons[1].attribute['value'] = t;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M50_3')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          let t: string = 't' + tno++;
          /* add */
          this.codes.push(t + ' := ' + inh + ' + ' + value); /* get */
          /* put */
          father.sons[1].attribute['value'] = t;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M51_3')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          let t: string = 't' + tno++;
          /* add */
          this.codes.push(t + ' := ' + inh + ' - ' + value); /* get */
          /* put */
          father.sons[1].attribute['value'] = t;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M52_4')) {
          let father: Node = left_node.getFather();
          /* put */
          father.attribute['value'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[1].attribute,
            'value',
          );
          /* put */
          father.attribute['val'] = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[1].attribute,
            'val',
          );
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M42_4')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          let b: string = 'b' + bno++;
          /* add */
          this.codes.push(b + ' := ' + inh + ' < ' + value);
          /* put */
          father.attribute['value'] = b;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M43_4')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          let b: string = 'b' + bno++;
          /* add */
          this.codes.push(b + ' := ' + inh + ' <= ' + value);
          /* put */
          father.attribute['value'] = b;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M44_4')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          let b: string = 'b' + bno++;
          /* add */
          this.codes.push(b + ' := ' + inh + ' > ' + value);
          /* put */
          father.attribute['value'] = b;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M45_4')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          let b: string = 'b' + bno++;
          /* add */
          this.codes.push(b + ' := ' + inh + ' >= ' + value);
          /* put */
          father.attribute['value'] = b;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M46_4')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          let b: string = 'b' + bno++;
          /* add */
          this.codes.push(b + ' := ' + inh + ' == ' + value);
          /* put */
          father.attribute['value'] = b;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M47_4')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          let b: string = 'b' + bno++;
          /* add */
          this.codes.push(b + ' := ' + inh + ' != ' + value);
          /* put */
          father.attribute['value'] = b;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M78_3')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'val');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          if (inh == null || /* equals */ <any>((o1: any, o2: any) => {
              if (o1 && o1.equals) {
                return o1.equals(o2);
              } else {
                return o1 === o2;
              }
            })(inh, 'null')) inh = /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(father.attribute, 'value');
          else {
            let temp: string = /* get */ ((m, k) =>
              m[k] === undefined ? null : m[k])(father.attribute, 'value');
            for (
              let i: number = /* size */ <number>this.codes.length - 1;
              i >= 0;
              i--
            ) {
              {
                if (
                  /* get */ this.codes[i] != null &&
                  /* startsWith */ ((str, searchString, position = 0) =>
                    str.substr(position, searchString.length) === searchString)(
                    /* get */ this.codes[i],
                    temp,
                  )
                ) {
                  /* remove */
                  this.codes.splice(i, 1)[0];
                }
              }
            }
          }
          /* add */
          this.codes.push(inh + ' := ' + value);
          /* put */
          father.attribute['value'] = inh;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M79_3')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          /* add */
          this.codes.push(inh + ' := ' + inh + ' + ' + value);
          /* put */
          father.attribute['value'] = inh;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M80_3')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          /* add */
          this.codes.push(inh + ' := ' + inh + ' - ' + value);
          /* put */
          father.attribute['value'] = inh;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M81_3')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          /* add */
          this.codes.push(inh + ' := ' + inh + ' * ' + value);
          /* put */
          father.attribute['value'] = inh;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M82_3')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          /* add */
          this.codes.push(inh + ' := ' + inh + ' / ' + value);
          /* put */
          father.attribute['value'] = inh;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M83_3')) {
          let father: Node = left_node.getFather();
          let inh: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(father.attribute, 'value');
          let value: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          /* add */
          this.codes.push(inh + ' := ' + inh + ' % ' + value);
          /* put */
          father.attribute['value'] = inh;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M26_5')) {
          let father: Node = left_node.getFather();
          let b: string = /* get */ ((m, k) =>
            m[k] === undefined ? null : m[k])(
            /* get */ father.sons[0].attribute,
            'value',
          );
          /* add */
          this.codes.push(
            'if ' + b + ' goto ' + /* size */ (<number>this.codes.length + 2),
          );
          /* put */
          father.attribute['backpatch'] =
            '' + /* size */ <number>this.codes.length;
          /* add */
          this.codes.push(null);
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M26_7')) {
          let father: Node = left_node.getFather();
          let backpatch: number = /* parseInt */ parseInt(
            /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
              father.attribute,
              'backpatch',
            ),
          );
          /* add */
          this.codes.push(null);
          /* set */
          this.codes[backpatch] =
            'goto ' + /* size */ <number>this.codes.length;
          /* put */
          father.attribute['backpatch'] =
            '' + /* size */ (<number>this.codes.length - 1);
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M26_9')) {
          let father: Node = left_node.getFather();
          let backpatch: number = /* parseInt */ parseInt(
            /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
              father.attribute,
              'backpatch',
            ),
          );
          /* set */
          this.codes[backpatch] =
            'goto ' + /* size */ <number>this.codes.length;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M38_7')) {
          let father: Node = left_node.getFather();
          let backpatch: number = /* parseInt */ parseInt(
            /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
              father.attribute,
              'backpatch',
            ),
          );
          let backto: number = /* parseInt */ parseInt(
            /* get */ ((m, k) => (m[k] === undefined ? null : m[k]))(
              father.attribute,
              'backto',
            ),
          );
          /* add */
          this.codes.push('goto ' + backto);
          /* set */
          this.codes[backpatch] =
            'goto ' + /* size */ <number>this.codes.length;
        } else if (/* equals */ <any>((o1: any, o2: any) => {
            if (o1 && o1.equals) {
              return o1.equals(o2);
            } else {
              return o1 === o2;
            }
          })(leftest.getName(), 'M38_3')) {
          let father: Node = left_node.getFather();
          /* put */
          father.attribute['backto'] =
            '' + /* size */ <number>this.codes.length;
        }
        if (leftest.isTerminal()) {
          if (/* equals */ <any>((o1: any, o2: any) => {
              if (o1 && o1.equals) {
                return o1.equals(o2);
              } else {
                return o1 === o2;
              }
            })(leftest.getName(), input_symbol.getName())) {
            pos++;
          } else if (
            pos < /* size */ <number>token_list.length - 1 &&
            /* equals */ <any>((o1: any, o2: any) => {
              if (o1 && o1.equals) {
                return o1.equals(o2);
              } else {
                return o1 === o2;
              }
            })(/* get */ token_list[pos + 1].getName(), leftest.getName())
          ) {
            let err_pro: ErrorProduction = new ErrorProduction(
              -1,
              leftest.getName(),
              leftest.getName(),
            );
            err_pro.setError(
              "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                leftest.getName() +
                "'\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                input_symbol.getName() +
                "'\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd" +
                ' at line ' +
                line,
            );
            err_pro.setSolution(
              "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                input_symbol.getName() +
                "'",
            );
            /* add */
            pro_list.push(err_pro);
            pos++;
            /* push */
            stack.push(leftest);
          } else {
            let err_pro: ErrorProduction = new ErrorProduction(
              -1,
              leftest.getName(),
            );
            err_pro.setError(
              "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                leftest.getName() +
                "'\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                input_symbol.getName() +
                "'\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd" +
                ' at line ' +
                line,
            );
            err_pro.setSolution(
              "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                leftest.getName() +
                "'",
            );
            /* add */
            pro_list.push(err_pro);
          }
        } else {
          let pros: Production[] = this.getProductionsByLeft(leftest.getName());
          let error = true;
          for (let i = 0; i < /* size */ <number>pros.length; i++) {
            {
              if (
                /* contains */ /* get */ pros[i]
                  .getSelect()
                  .indexOf(<any>input_symbol.getName()) >= 0
              ) {
                /* add */
                pro_list.push(/* get */ pros[i]);
                let right: string[] = /* get */ pros[i].getRight();
                for (let j: number = right.length - 1; j >= 0; j--) {
                  {
                    let temp: Symbol = this.getSymbol(right[j]);
                    /* push */
                    stack.push(temp);
                    if (!temp.isTerminal()) {
                      let node: Node = new Node(temp.getName(), left_node);
                      if (
                        (c =>
                          c.charCodeAt == null ? <any>c : c.charCodeAt(0))(
                          node.getSymbol_name().charAt(0),
                        ) != 'M'.charCodeAt(0)
                      )
                        /* add */ left_node.sons.splice(0, 0, node);
                      /* push */
                      node_stack.push(node);
                    }
                  }
                }
                error = false;
                break;
              }
            }
          }
          if (error) {
            let pro: Production = this.getProductionToBlank(leftest.getName());
            if (pro != null) {
              let err_pro: ErrorProduction = new ErrorProduction(pro);
              err_pro.setError(
                "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                  leftest.getName() +
                  "'\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                  input_symbol.getName() +
                  "' at line " +
                  line,
              );
              err_pro.setSolution(
                "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                  leftest.getName() +
                  "'\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd",
              );
              /* add */
              pro_list.push(err_pro);
            } else if (leftest.has('follow', input_symbol.getName())) {
              let err_pro: ErrorProduction = new ErrorProduction(
                -1,
                leftest.getName(),
              );
              err_pro.setError(
                "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                  leftest.getName() +
                  "'\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                  input_symbol.getName() +
                  "' at line " +
                  line,
              );
              err_pro.setSolution(
                "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                  leftest.getName() +
                  "'",
              );
              /* add */
              pro_list.push(err_pro);
            } else {
              let err_pro: ErrorProduction = new ErrorProduction(
                -1,
                /* get */ stack[/* size */ <number>stack.length - 1].getName(),
                /* get */ stack[/* size */ <number>stack.length - 1].getName(),
              );
              err_pro.setError(
                "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                  leftest.getName() +
                  "'\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                  input_symbol.getName() +
                  "' at line " +
                  line,
              );
              err_pro.setSolution(
                "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd'" +
                  input_symbol.getName() +
                  "'",
              );
              /* add */
              pro_list.push(err_pro);
              pos++;
              /* push */
              stack.push(input_symbol);
            }
          }
        }
      }
    }
    console.info(
      'DEBUG' +
        /* implicit toString */ (a => (a ? '[' + a.join(', ') + ']' : 'null'))(
          this.codes,
        ),
    );
    for (let i = 0; i < /* size */ <number>this.codes.length; i++) {
      {
        console.info(i + '\t' + /* get */ this.codes[i]);
      }
    }
    return pro_list;
  }
}

GrammarCompiler['__class'] = 'GrammarCompiler';

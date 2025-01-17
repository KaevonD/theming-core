// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export interface OptionalState {
  selector: string;
}

export interface DefaultState {
  default: boolean;
}
export interface Mode {
  id: string;
  states: Record<string, DefaultState | OptionalState>;
}

export type Token = string;
export type Value = string;
export type Reference = string;

export type GlobalValue = Value;
export type GlobalReference = Reference;
export type ModeValue<S extends string = string> = Record<S, Value | Reference>;
export type Assignment = GlobalValue | GlobalReference | ModeValue;

export interface Context {
  id: string;
  selector: string;
  tokens: Record<string, Assignment>;
}

export interface Theme {
  id: string;
  selector: string;
  tokens: Record<string, Assignment>;
  modes: Record<string, Mode>;
  tokenModeMap: Record<string, string>;
  contexts: Record<string, Context>;
}

type Tokens = Partial<Record<string, GlobalValue | TypedModeValueOverride>>;

export interface Override {
  tokens: Tokens;
  contexts?: Record<string, { tokens: Tokens } | undefined>;
}

export type TypedModeValueOverride<S extends string = string> = Partial<Record<S, Value>>;
/**
 * A theme preset contains information to render themed components or applying
 * a theme at runtime. It should only be used internally and not exposed to customers.
 */
export interface ThemePreset {
  theme: Theme;
  secondary?: Theme[];
  themeable: Token[];
  /** List of public design tokens */
  exposed: Token[];
  /** Map between design tokens and custom properties */
  propertiesMap: Record<Token, string>;
  /** Map between design tokens and variable names */
  variablesMap: Record<Token, string>;
}

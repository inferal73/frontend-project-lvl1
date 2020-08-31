#!/usr/bin/env node
import { welcomeMessage } from '../src/cli.js';
import { runBrainCalc } from '../src/games/brain-calc.js';

const name = welcomeMessage();
runBrainCalc(name);

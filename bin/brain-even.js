#!/usr/bin/env node
import { welcomeMessage } from '../src/cli.js';
import { runBrainEven } from '../src/games/brain-even.js';

const name = welcomeMessage();
runBrainEven(name);

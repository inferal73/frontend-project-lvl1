#!/usr/bin/env node
import { welcomeMessage } from '../src/cli.js';
import { runBrainGcd } from '../src/games/brain-gcd.js';

const name = welcomeMessage();
runBrainGcd(name);

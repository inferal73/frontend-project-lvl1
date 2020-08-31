#!/usr/bin/env node
import { welcomeMessage } from '../src/cli.js';
import { runBrainPrime } from '../src/games/brain-prime.js';

const name = welcomeMessage();
runBrainPrime(name);

#!/usr/bin/env node
import { welcomeMessage, runBrainPrime } from '../src/cli.js';

const name = welcomeMessage();
runBrainPrime(name);

#!/usr/bin/env node
import { welcomeMessage, runBrainCalc } from '../src/cli.js';

const name = welcomeMessage();
runBrainCalc(name);

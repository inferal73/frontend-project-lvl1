#!/usr/bin/env node
import { welcomeMessage, runBrainEven } from '../src/cli.js';

const name = welcomeMessage();
runBrainEven(name);

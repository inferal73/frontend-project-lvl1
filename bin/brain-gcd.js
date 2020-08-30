#!/usr/bin/env node
import { welcomeMessage, runBrainGcd } from '../src/cli.js';

const name = welcomeMessage();
runBrainGcd(name);

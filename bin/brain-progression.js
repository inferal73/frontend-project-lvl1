#!/usr/bin/env node
import { welcomeMessage, runBrainProgression } from '../src/cli.js';

const name = welcomeMessage();
runBrainProgression(name);

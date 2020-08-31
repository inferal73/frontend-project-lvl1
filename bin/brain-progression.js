#!/usr/bin/env node
import { welcomeMessage } from '../src/cli.js';
import { runBrainProgression } from '../src/games/brain-progression.js';

const name = welcomeMessage();
runBrainProgression(name);

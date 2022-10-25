import {execaCommand} from 'execa';

(async () => {

  try {
    const {stdout} = await execaCommand('echo unicorns');
console.log(stdout);
//=> 'unicorns'
} catch (e) {
  // eslint-disable-next-line no-console
  console.log(e.message);
  process.exit(1);
}
})();
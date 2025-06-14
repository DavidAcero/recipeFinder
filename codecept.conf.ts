import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
require('./heal');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './testsCodeceptJS/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost:3000',
      show: true
    }
  },
  ai: {
  request: async messages => {
     /* * * * * * * * *
      *  GROQ Example *
      * * * * * * * * */
      const Groq = require('groq-sdk')

      const client = new Groq({
        apiKey: process.env.GROQ_API_KEY,
      });

      const chatCompletion = await client.chat.completions.create({
        messages,
        model: 'llama-3.3-70b-versatile',
      });
      console.log('\n* * * * * * * * * * *\n* Prompt sent to AI *\n* * * * * * * * * * *\n\n', messages[0].content);
      console.log('\n* * * * * * * *\n* Token Usage *\n* * * * * * * *\n', chatCompletion.usage);
      console.log('\n* * * * * * * *\n* AI Response *\n* * * * * * * *\n', chatCompletion.choices[0]?.message);
      return chatCompletion.choices[0]?.message?.content || ''

     /* * * * * * * * * *
      *  OpenAI Example *
      * * * * * * * * * *
      const OpenAI = require('openai');
      const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });

      const completion = await openai.chat.completions.create({
          model: 'gpt-4o',
          messages,
      });

      console.log('\n* * * * * * * * * * *\n* Prompt sent to AI *\n* * * * * * * * * * *\n\n', messages[0].content);
      console.log('\n* * * * * * * *\n* Token Usage *\n* * * * * * * *\n', completion.usage);
      console.log('\n* * * * * * * *\n* AI Response *\n* * * * * * * *\n', completion.choices[0]?.message);

      return completion?.choices[0]?.message?.content;
      */
    }
  },
  plugins: {
    heal: {  enabled: true, healLimit: 20 },
  },
  include: {
    I: './steps_file'
  },
  name: 'recipeFinder'
}
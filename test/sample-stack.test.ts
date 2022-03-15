import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as Sample from '../infra/stack/backend-lambda-stack';
import { AppContext } from '../lib/template/app-context';

test('Empty Stack', () => {
    const appContext = new AppContext({
        appConfigFileKey: 'APP_CONFIG'
    })

    // WHEN
    const stack = new Sample.BackendLambdaStack(appContext, {Name: 'SampleStack'});
    
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});

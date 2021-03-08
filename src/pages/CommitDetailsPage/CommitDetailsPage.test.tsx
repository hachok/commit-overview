import {cleanup, render} from '@testing-library/react';
import CommitDetailsPage from 'src/pages/CommitDetailsPage/CommitDetailsPage';
import '@testing-library/jest-dom/extend-expect'
import fetch from 'jest-fetch-mock';

jest.mock('react-router-dom', () => ({
    useParams: () => ({
        id: 'd74559746c03d9f620e4fd338c70ce319070e0be',
    }),
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

const mockData = {
    'sha': 'd74559746c03d9f620e4fd338c70ce319070e0be',
    'commit': {
        'author': {
            'name': 'Ricky',
            'email': 'rickhanlonii@gmail.com',
            'date': '2021-03-07T23:43:29Z'
        },
        'message': 'Use update lane priority to set pending updates on roots (#20918)',
    },
    'author': {
        'avatar_url': 'https://avatars.githubusercontent.com/u/2440089?v=4',
    },
    'files': [
        {
            'sha': '77bd914eaa5fc90a9f808e1a5a8acf14ed96e78c',
            'filename': 'packages/react-reconciler/src/ReactFiberWorkLoop.old.js',
            'patch': '@@ -598,6 +598,27 @@ export function scheduleUpdateOnFiber(\n         flushSyncCallbackQueue();\n       }\n     }\n+  } else if (decoupleUpdatePriorityFromScheduler) {\n+    const updateLanePriority = getCurrentUpdateLanePriority();\n+\n+    // Schedule a discrete update but only if it\'s not Sync.\n+    if (\n+      (executionContext & DiscreteEventContext) !== NoContext &&\n+      // Only updates at user-blocking priority or greater are considered\n+      // discrete, even inside a discrete event.\n+      updateLanePriority === InputDiscreteLanePriority\n+    ) {\n+      // This is the result of a discrete event. Track the lowest priority\n+      // discrete update per root so we can flush them early, if needed.\n+      if (rootsWithPendingDiscreteUpdates === null) {\n+        rootsWithPendingDiscreteUpdates = new Set([root]);\n+      } else {\n+        rootsWithPendingDiscreteUpdates.add(root);\n+      }\n+    }\n+    // Schedule other updates after in case the callback is sync.\n+    ensureRootIsScheduled(root, eventTime);\n+    schedulePendingInteractions(root, lane);\n   } else {\n     // Schedule a discrete update but only if it\'s not Sync.\n     if ('
        }
    ]
};

beforeEach(() => {
    fetch.resetMocks();
});

afterEach(cleanup);

test('it should render component correctly', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));
    const rendered = render(<CommitDetailsPage/>)

    await rendered.findByText('Ricky');

    expect(rendered).toMatchSnapshot();
})

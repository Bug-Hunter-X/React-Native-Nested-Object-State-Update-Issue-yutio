This solution uses the `immer` library for more efficient immutable updates to nested objects:

```javascript
import React, { useState } from 'react';
import produce from 'immer';

const MyComponent = () => {
  const [myData, setMyData] = useState({ nested: { value: 'initial' } });

  const updateNestedValue = () => {
    setMyData(produce(myData, draft => {
      draft.nested.value = 'updated';
    }));
  };

  return (
    <View>
      <Text>{myData.nested.value}</Text>
      <Button title="Update Value" onPress={updateNestedValue} />
    </View>
  );
};

export default MyComponent;
```

The `immer` library allows for direct mutation of a draft state. This avoids creating unnecessary copies of nested objects, thus improving performance and reducing potential for unexpected behavior.  Remember to install `immer` using `npm install immer` or `yarn add immer`.
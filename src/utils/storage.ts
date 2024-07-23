export const storeDataInStorage = (key: StorageKeys, value: any) => {
    try {
      if (typeof value === 'object') {
        value = JSON.stringify(value);
      }
      localStorage.setItem(key, value);
    } catch (e) {
      // Handle saving error
    }
  };
  
  const parseString = (str: string) => {
    try {
      const json = JSON.parse(str);
      return json;
    } catch (e) {
      return str;
    }
  };
  
  export const getStorageData = (key: StorageKeys) => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return parseString(value);
      }
  
      return null;
    } catch (e) {
      // Handle error reading value
    }
  };
  
  
  export enum StorageKeys {
    TOKEN = 'token',
    IS_AUTHENTICATED = 'is_authenticated',
    FIRSTNAME = 'firstName',
    PHOTOURL = 'photoUrl'
    // SEEN_INTRO = 'seen_intro',
    // VERIFY_MAIL = 'verify_mail',
    // ACCOUNT_TYPE = "account_type",
  }
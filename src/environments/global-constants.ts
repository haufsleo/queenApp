export class GlobalConstants {
  private static MOCKING_MODE = true;

  static EXTENSION = GlobalConstants.MOCKING_MODE ? '.json' : '';
  static SERVER_BASE_URL = 'assets/mockdata';
}

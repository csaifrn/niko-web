export interface GetMeResponse {
  id: string;
  name: string;
  email: string;
  photo: Photo;
  reseted_password_at: any;
}

export interface Photo {
  id?: string;
  url: string;
  fileName?: string;
  contentType?: string;
}

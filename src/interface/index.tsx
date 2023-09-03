export interface Photo {
  id: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: Download;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: Sponsorship;
  topic_submissions: TopicSubmissions;
  user: UserOwner;
  exif: Exif;
  location: Location;
  meta: Meta;
  public_domain: boolean;
  tags: Tag[];
  tags_preview: TagsPreview[];
  views: number;
  downloads: number;
  topics: any[];
  related_collections: RelatedCollections;
}

export interface Exif {
  make: null;
  model: null;
  name: null;
  exposure_time: null;
  aperture: null;
  focal_length: string;
  iso: null;
}

export interface Download {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Location {
  name: string;
  city: null;
  country: null;
  position: Position;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface RelatedCollections {
  total: number;
  type: string;
  results: Result[];
}

export interface Result {
  id: string;
  title: string;
  description: null;
  published_at: Date;
  last_collected_at: Date;
  updated_at: Date;
  featured: boolean;
  total_photos: number;
  private: boolean;
  share_key: string;
  tags: ResultTag[];
  links: ResultLinks;
  user: UserOwner;
  cover_photo: ResultCoverPhoto;
  preview_photos: PreviewPhoto[];
}

export interface ResultCoverPhoto {
  id: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: Download;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: PurpleTopicSubmissions;
  user: UserOwner;
}

export interface PurpleTopicSubmissions {
  blue?: Blue;
  wallpapers?: Blue;
}

export interface Blue {
  status: Status;
  approved_on: Date;
}

export enum Status {
  Approved = "approved",
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface UserOwner {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: null | string;
  twitter_username: null | string;
  portfolio_url: null | string;
  bio: null | string;
  location: null | string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: null | string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: null | string;
  portfolio_url: null | string;
  twitter_username: null | string;
  paypal_email: null;
}

export interface ResultLinks {
  self: string;
  html: string;
  photos: string;
  related: string;
}

export interface PreviewPhoto {
  id: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  blur_hash: string;
  urls: Urls;
}

export interface ResultTag {
  type: Type;
  title: string;
  source?: PurpleSource;
}

export interface PurpleSource {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: PurpleCoverPhoto;
}

export interface Ancestry {
  type: Category;
  category?: Category;
  subcategory?: Category;
}

export interface Category {
  slug: string;
  pretty_slug: string;
}

export interface PurpleCoverPhoto {
  id: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: Download;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: FluffyTopicSubmissions;
  premium: boolean;
  plus: boolean;
  user: UserOwner;
}

export interface FluffyTopicSubmissions {
  wallpapers?: Blue;
  nature?: Blue;
  "textures-patterns"?: Blue;
  "architecture-interior"?: Blue;
  "color-of-water"?: Blue;
}

export enum Type {
  LandingPage = "landing_page",
  Search = "search",
}

export interface Sponsorship {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: UserOwner;
}

export interface Tag {
  type: Type;
  title: string;
  source?: FluffySource;
}

export interface FluffySource {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: FluffyCoverPhoto;
}

export interface FluffyCoverPhoto {
  id: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: Download;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: TentacledTopicSubmissions;
  premium: boolean;
  plus: boolean;
  user: UserOwner;
}

export interface TentacledTopicSubmissions {
  nature?: Blue;
  wallpapers?: Blue;
}

export interface TagsPreview {
  type: Type;
  title: string;
  source?: TagsPreviewSource;
}

export interface TagsPreviewSource {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: TentacledCoverPhoto;
}

export interface TentacledCoverPhoto {
  id: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: Download;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: StickyTopicSubmissions;
  premium: boolean;
  plus: boolean;
  user: UserOwner;
}
export interface StickyTopicSubmissions {
  nature?: Blue;
}

export interface TopicSubmissions {}

export interface ProfileUser {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: null;
  portfolio_url: string;
  bio: string;
  location: string;
  links: ProfileUserLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
  followed_by_user: boolean;
  photos: PhotoPreview[];
  badge: null;
  tags: Tags;
  followers_count: number;
  following_count: number;
  allow_messages: boolean;
  numeric_id: number;
  downloads: number;
  meta: Meta;
}
export interface PhotoPreview {
  id: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  blur_hash: string;
  urls: Urls;
}
export interface ProfileUserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface Meta {
  index: boolean;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Tags {
  custom: Custom[];
  aggregated: Aggregated[];
}

export interface Aggregated {
  type: Type;
  title: string;
  source?: AggregatedSource;
}

export interface AggregatedSource {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: PurpleCoverPhoto;
}

export interface Breadcrumb {
  slug: string;
  title: string;
  index: number;
  type: Type;
}

export interface CoverPhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface PurpleTopicSubmissions {
  nature?: Animals;
  wallpapers?: Animals;
  "architecture-interior"?: Animals;
  "color-of-water"?: Animals;
  "textures-patterns"?: Animals;
  spirituality?: Animals;
  animals?: Animals;
  "arts-culture"?: Animals;
  health?: Animals;
  experimental?: Animals;
}

export interface Animals {
  status: Status;
  approved_on: Date;
}

export interface Custom {
  type: Type;
  title: string;
  source?: CustomSource;
}

export interface CustomSource {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: FluffyCoverPhoto;
}

export interface FluffyTopicSubmissions {
  nature?: Animals;
  "current-events"?: Animals;
  spirituality?: Animals;
}

export interface TopicsInterface {
  id: string;
  slug: string;
  title: string;
  description: string;
  published_at: Date;
  updated_at: Date;
  starts_at: Date;
  ends_at: null;
  only_submissions_after: null;
  visibility: string;
  featured: boolean;
  total_photos: number;
  links: TopicLinks;
  status: string;
  owners: User[];
  current_user_contributions: any[];
  total_current_user_submissions: TotalCurrentUserSubmissions;
  cover_photo: CoverPhoto;
}

export interface CoverPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: CoverPhotoLinks;
  user: User;
  preview_photos: PreviewPhoto[];
}

export interface CoverPhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface PreviewPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  urls: Urls;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: null;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface TopicLinks {
  self: string;
  html: string;
  photos: string;
}

export interface TotalCurrentUserSubmissions {}

export interface Collections {
  id: number;
  title: string;
  description: string;
  published_at: Date;
  last_collected_at: Date;
  updated_at: Date;
  total_photos: number;
  private: boolean;
  share_key: string;
  cover_photo: CoverPhoto;
  user: User;
  links: CollectionLinks;
}

export interface CoverPhoto {
  id: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: User;
  urls: Urls;
  links: CoverPhotoLinks;
}

export interface CoverPhotoLinks {
  self: string;
  html: string;
  download: string;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  profile_image: ProfileImage;
  links: UserLinks;
  updated_at: Date;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface CollectionLinks {
  self: string;
  html: string;
  photos: string;
  related: string;
}

export interface CollectionsInterface {
  id: string;
  title: string;
  description: string;
  published_at: Date;
  last_collected_at: Date;
  updated_at: Date;
  total_photos: number;
  private: boolean;
  share_key: string;
  cover_photo: CoverPhoto;
  user: User;
  links: CollectionsListLinks;
}

export interface CoverPhoto {
  id: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: User;
  urls: Urls;
  links: CoverPhotoLinks;
}

export interface CoverPhotoLinks {
  self: string;
  html: string;
  download: string;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  profile_image: ProfileImage;
  links: UserLinks;
  updated_at: Date;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface CollectionsListLinks {
  self: string;
  html: string;
  photos: string;
  related: string;
}

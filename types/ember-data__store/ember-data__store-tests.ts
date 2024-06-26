import Model, { attr, belongsTo, hasMany } from "@ember-data/model";
import Store, { normalizeModelName, Snapshot } from "@ember-data/store";
import EmberArray from "@ember/array";
import DS from "ember-data";
import ModelRegistry from "ember-data/types/registries/model";

// -- support types
declare class Post extends Model {
    @attr("string")
    title: string;

    @hasMany("post-comment")
    comments: EmberArray<PostComment>;
}

declare class PostComment extends Model {
    @belongsTo("post")
    post: Post;
}

declare module "ember-data/types/registries/model" {
    export default interface ModelRegistry {
        post: Post;
        "post-comment": PostComment;
    }
}

// -- actual tests
Store; // $ExpectType typeof Store
Snapshot; // $ExpectType typeof Snapshot
normalizeModelName("post"); // $ExpectType string
normalizeModelName("post-comment"); // $ExpectType string

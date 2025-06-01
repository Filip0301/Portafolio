"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{9978:function(e,t,r){r.d(t,{JU:function(){return ib},PL:function(){return iJ},QT:function(){return iY},ad:function(){return iV},hJ:function(){return ik}});var n,i,s,a,o=r(9511),l=r(5538),u=r(6914),h=r(1674),c=r(3172),d=r(4203);r(2601);var m=r(263).Buffer;let f="@firebase/firestore",g="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}p.UNAUTHENTICATED=new p(null),p.GOOGLE_CREDENTIALS=new p("google-credentials-uid"),p.FIRST_PARTY=new p("first-party-uid"),p.MOCK_USER=new p("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y="11.8.1",v=new u.Yd("@firebase/firestore");function w(){return v.logLevel}function E(e,...t){if(v.logLevel<=u.in.DEBUG){let r=t.map(C);v.debug(`Firestore (${y}): ${e}`,...r)}}function T(e,...t){if(v.logLevel<=u.in.ERROR){let r=t.map(C);v.error(`Firestore (${y}): ${e}`,...r)}}function _(e,...t){if(v.logLevel<=u.in.WARN){let r=t.map(C);v.warn(`Firestore (${y}): ${e}`,...r)}}function C(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t,r){let n="Unexpected state";"string"==typeof t?n=t:r=t,S(e,n,r)}function S(e,t,r){let n=`FIRESTORE (${y}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==r)try{n+=" CONTEXT: "+JSON.stringify(r)}catch(e){n+=" CONTEXT: "+r}throw T(n),Error(n)}function A(e,t,r,n){let i="Unexpected state";"string"==typeof r?i=r:n=r,e||S(t,i,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends h.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class x{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(p.UNAUTHENTICATED))}shutdown(){}}class R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class L{constructor(e){this.t=e,this.currentUser=p.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){A(void 0===this.o,42304);let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new b;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new b,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new b)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(A("string"==typeof t.accessToken,31837,{l:t}),new D(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return A(null===e||"string"==typeof e,2055,{h:e}),new p(e)}}class V{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=p.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class M{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new V(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(p.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,o.rh)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){A(void 0===this.o,3512);let r=e=>{null!=e.error&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.m;return this.m=e.token,E("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?n(e):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new O(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(A("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new O(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let n=0;n<r.length;++n)t.length<20&&r[n]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(r[n]%62))}return t}}function q(e,t){return e<t?-1:e>t?1:0}function z(e,t){let r=0;for(;r<e.length&&r<t.length;){let n=e.codePointAt(r),i=t.codePointAt(r);if(n!==i){if(n<128&&i<128)return q(n,i);{let s=F(),a=function(e,t){for(let r=0;r<e.length&&r<t.length;++r)if(e[r]!==t[r])return q(e[r],t[r]);return q(e.length,t.length)}(s.encode(B(e,r)),s.encode(B(t,r)));return 0!==a?a:q(n,i)}}r+=n>65535?2:1}return q(e.length,t.length)}function B(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function $(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}class K{static now(){return K.fromMillis(Date.now())}static fromDate(e){return K.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*1e6);return new K(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new k(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new k(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new K(0,0))}static max(){return new G(new K(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q="__name__";class j{constructor(e,t,r){void 0===t?t=0:t>e.length&&I(637,{offset:t,range:e.length}),void 0===r?r=e.length-t:r>e.length-t&&I(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===j.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof j?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=j.compareSegments(e.get(n),t.get(n));if(0!==r)return r}return q(e.length,t.length)}static compareSegments(e,t){let r=j.isNumericId(e),n=j.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?j.extractNumericId(e).compare(j.extractNumericId(t)):z(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return c.z8.fromString(e.substring(4,e.length-2))}}class H extends j{construct(e,t,r){return new H(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new k(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new H(t)}static emptyPath(){return new H([])}}let W=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends j{construct(e,t,r){return new Y(e,t,r)}static isValidIdentifier(e){return W.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Q}static keyField(){return new Y([Q])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new k(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new k(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new k(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new k(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Y(t)}static emptyPath(){return new Y([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(H.fromString(e))}static fromName(e){return new X(H.fromString(e).popFirst(5))}static empty(){return new X(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===H.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return H.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new H(e.slice()))}}class J{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new J(G.min(),X.empty(),-1)}static max(){return new J(G.max(),X.empty(),-1)}}class Z{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){if(e.code!==N.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&I(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new et((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof et?t:et.resolve(t)}catch(e){return et.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):et.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):et.reject(t)}static resolve(e){return new et((t,r)=>{t(e)})}static reject(e){return new et((t,r)=>{r(e)})}static waitFor(e){return new et((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=et.resolve(!1);for(let r of e)t=t.next(e=>e?et.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new et((r,n)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new et((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function er(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ue(e),this.ce=e=>t.writeSequenceNumber(e))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ce&&this.ce(e),e}}function ei(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function ea(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}en.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.comparator=e,this.root=t||eu.EMPTY}insert(e,t){return new eo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eu.BLACK,null,null))}remove(e){return new eo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eu.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new el(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new el(this.root,e,this.comparator,!1)}getReverseIterator(){return new el(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new el(this.root,e,this.comparator,!0)}}class el{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eu{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:eu.RED,this.left=null!=n?n:eu.EMPTY,this.right=null!=i?i:eu.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new eu(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return eu.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return eu.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw I(43730,{key:this.key,value:this.value});if(this.right.isRed())throw I(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw I(27949);return e+(this.isRed()?0:1)}}eu.EMPTY=null,eu.RED=!0,eu.BLACK=!1,eu.EMPTY=new class{constructor(){this.size=0}get key(){throw I(57766)}get value(){throw I(16141)}get color(){throw I(16727)}get left(){throw I(29726)}get right(){throw I(36894)}copy(e,t,r,n,i){return this}insert(e,t,r){return new eu(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.comparator=e,this.data=new eo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ec(this.data.getIterator())}getIteratorFrom(e){return new ec(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eh)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eh(this.comparator);return t.data=e,t}}class ec{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.fields=e,e.sort(Y.comparator)}static empty(){return new ed([])}unionWith(e){let t=new eh(Y.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new ed(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new em("Invalid base64 string: "+e):e}}(e);return new ef(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new ef(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ef.EMPTY_BYTE_STRING=new ef("");let eg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ep(e){if(A(!!e,39018),"string"==typeof e){let t=0,r=eg.exec(e);if(A(!!r,46558,{timestamp:e}),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:ey(e.seconds),nanos:ey(e.nanos)}}function ey(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ev(e){return"string"==typeof e?ef.fromBase64String(e):ef.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ew="server_timestamp",eE="__type__",eT="__previous_value__",e_="__local_write_time__";function eC(e){var t,r;return(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[eE])||void 0===r?void 0:r.stringValue)===ew}function eI(e){let t=e.mapValue.fields[eT];return eC(t)?eI(t):t}function eS(e){let t=ep(e.mapValue.fields[e_].timestampValue);return new K(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,t,r,n,i,s,a,o,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=u}}let eN="(default)";class ek{constructor(e,t){this.projectId=e,this.database=t||eN}static empty(){return new ek("","")}get isDefaultDatabase(){return this.database===eN}isEqual(e){return e instanceof ek&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eb="__max__",eD={mapValue:{fields:{__type__:{stringValue:eb}}}},ex="value";function eR(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eC(e)?4:eQ(e)?9007199254740991:eK(e)?10:11:I(28295,{value:e})}function eL(e,t){if(e===t)return!0;let r=eR(e);if(r!==eR(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eS(e).isEqual(eS(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=ep(e.timestampValue),n=ep(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return ev(e.bytesValue).isEqual(ev(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ey(e.geoPointValue.latitude)===ey(t.geoPointValue.latitude)&&ey(e.geoPointValue.longitude)===ey(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ey(e.integerValue)===ey(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=ey(e.doubleValue),n=ey(t.doubleValue);return r===n?ei(r)===ei(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return $(e.arrayValue.values||[],t.arrayValue.values||[],eL);case 10:case 11:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(es(r)!==es(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!eL(r[e],n[e])))return!1;return!0}(e,t);default:return I(52216,{left:e})}}function eV(e,t){return void 0!==(e.values||[]).find(e=>eL(e,t))}function eM(e,t){if(e===t)return 0;let r=eR(e),n=eR(t);if(r!==n)return q(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return q(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=ey(e.integerValue||e.doubleValue),n=ey(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return eO(e.timestampValue,t.timestampValue);case 4:return eO(eS(e),eS(t));case 5:return z(e.stringValue,t.stringValue);case 6:return function(e,t){let r=ev(e),n=ev(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=q(r[e],n[e]);if(0!==t)return t}return q(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=q(ey(e.latitude),ey(t.latitude));return 0!==r?r:q(ey(e.longitude),ey(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return eP(e.arrayValue,t.arrayValue);case 10:return function(e,t){var r,n,i,s;let a=e.fields||{},o=t.fields||{},l=null===(r=a[ex])||void 0===r?void 0:r.arrayValue,u=null===(n=o[ex])||void 0===n?void 0:n.arrayValue,h=q((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:eP(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===eD.mapValue&&t===eD.mapValue)return 0;if(e===eD.mapValue)return 1;if(t===eD.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=z(n[e],s[e]);if(0!==t)return t;let a=eM(r[n[e]],i[s[e]]);if(0!==a)return a}return q(n.length,s.length)}(e.mapValue,t.mapValue);default:throw I(23264,{Pe:r})}}function eO(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return q(e,t);let r=ep(e),n=ep(t),i=q(r.seconds,n.seconds);return 0!==i?i:q(r.nanos,n.nanos)}function eP(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=eM(r[e],n[e]);if(t)return t}return q(r.length,n.length)}function eF(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ep(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ev(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,X.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=eF(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${eF(e.fields[i])}`;return r+"}"}(e.mapValue):I(61005,{value:e})}function eU(e){return!!e&&"integerValue"in e}function eq(e){return!!e&&"arrayValue"in e}function ez(e){return!!e&&"nullValue"in e}function eB(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function e$(e){return!!e&&"mapValue"in e}function eK(e){var t,r;return(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)==="__vector__"}function eG(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ea(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=eG(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=eG(e.arrayValue.values[r]);return t}return Object.assign({},e)}function eQ(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===eb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e){this.value=e}static empty(){return new ej({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!e$(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eG(t)}setAll(e){let t=Y.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=eG(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());e$(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eL(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];e$(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(ea(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new ej(eG(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eH{constructor(e,t,r,n,i,s,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new eH(e,0,G.min(),G.min(),G.min(),ej.empty(),0)}static newFoundDocument(e,t,r,n){return new eH(e,1,t,G.min(),r,n,0)}static newNoDocument(e,t){return new eH(e,2,t,G.min(),G.min(),ej.empty(),0)}static newUnknownDocument(e,t){return new eH(e,3,t,G.min(),G.min(),ej.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(G.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ej.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ej.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eH&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eH(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW{constructor(e,t){this.position=e,this.inclusive=t}}function eY(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(n=s.field.isKeyField()?X.comparator(X.fromName(a.referenceValue),r.key):eM(a,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function eX(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!eL(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eZ{}class e0 extends eZ{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new e4(e,t,r):"array-contains"===t?new e8(e,r):"in"===t?new e7(e,r):"not-in"===t?new te(e,r):"array-contains-any"===t?new tt(e,r):new e0(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new e6(e,r):new e9(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(eM(t,this.value)):null!==t&&eR(this.value)===eR(t)&&this.matchesComparison(eM(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return I(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class e1 extends eZ{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new e1(e,t)}matches(e){return e2(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Te||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function e2(e){return"and"===e.op}function e3(e){for(let t of e.filters)if(t instanceof e1)return!1;return!0}class e4 extends e0{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){let t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class e6 extends e0{constructor(e,t){super(e,"in",t),this.keys=e5("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class e9 extends e0{constructor(e,t){super(e,"not-in",t),this.keys=e5("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function e5(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>X.fromName(e.referenceValue))}class e8 extends e0{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eq(t)&&eV(t.arrayValue,this.value)}}class e7 extends e0{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eV(this.value.arrayValue,t)}}class te extends e0{constructor(e,t){super(e,"not-in",t)}matches(e){if(eV(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!eV(this.value.arrayValue,t)}}class tt extends e0{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eq(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eV(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t=null,r=[],n=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=a,this.Ie=null}}function tn(e,t=null,r=[],n=[],i=null,s=null,a=null){return new tr(e,t,r,n,i,s,a)}function ti(e){if(null===e.Ie){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof e0)return t.field.canonicalString()+t.op.toString()+eF(t.value);if(e3(t)&&e2(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>eF(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>eF(e)).join(",")),e.Ie=t}return e.Ie}function ts(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof e0?r instanceof e0&&t.op===r.op&&t.field.isEqual(r.field)&&eL(t.value,r.value):t instanceof e1?r instanceof e1&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void I(19439)}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eX(e.startAt,t.startAt)&&eX(e.endAt,t.endAt)}function ta(e){return X.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t=null,r=[],n=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function tl(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tu(e){if(null===e.Ee){let t;e.Ee=[];let r=new Set;for(let t of e.explicitOrderBy)e.Ee.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=(t=new eh(Y.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t);i.forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.Ee.push(new eJ(t,n))}),r.has(Y.keyField().canonicalString())||e.Ee.push(new eJ(Y.keyField(),n))}return e.Ee}function th(e){return e.de||(e.de=function(e,t){if("F"===e.limitType)return tn(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eJ(e.field,t)});let r=e.endAt?new eW(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new eW(e.startAt.position,e.startAt.inclusive):null;return tn(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,tu(e))),e.de}function tc(e,t,r){return new to(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function td(e,t){return ts(th(e),th(t))&&e.limitType===t.limitType}function tm(e){return`${ti(th(e))}|lt:${e.limitType}`}function tf(e){var t;let r;return`Query(target=${r=(t=th(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof e0?`${t.field.canonicalString()} ${t.op} ${eF(t.value)}`:t instanceof e1?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eF(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eF(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function tg(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):X.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of tu(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=eY(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,tu(e),t))&&(!e.endAt||!!function(e,t,r){let n=eY(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,tu(e),t))}function tp(e){return(t,r)=>{let n=!1;for(let i of tu(e)){let e=function(e,t,r){let n=e.field.isKeyField()?X.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?eM(n,i):I(42886)}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return I(19790,{direction:e.dir})}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){ea(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tv=new eo(X.comparator),tw=new eo(X.comparator);function tE(...e){let t=tw;for(let r of e)t=t.insert(r.key,r);return t}function tT(){return new ty(e=>e.toString(),(e,t)=>e.isEqual(t))}new eo(X.comparator);let t_=new eh(X.comparator);function tC(...e){let t=t_;for(let r of e)t=t.add(r);return t}let tI=new eh(q);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this._=void 0}}class tA extends tS{}class tN extends tS{constructor(e){super(),this.elements=e}}function tk(e,t){let r=tL(t);for(let t of e.elements)r.some(e=>eL(e,t))||r.push(t);return{arrayValue:{values:r}}}class tb extends tS{constructor(e){super(),this.elements=e}}function tD(e,t){let r=tL(t);for(let t of e.elements)r=r.filter(e=>!eL(e,t));return{arrayValue:{values:r}}}class tx extends tS{constructor(e,t){super(),this.serializer=e,this.Re=t}}function tR(e){return ey(e.integerValue||e.doubleValue)}function tL(e){return eq(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tV{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tV}static exists(e){return new tV(void 0,e)}static updateTime(e){return new tV(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tM(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tO{}function tP(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tG(e.key,tV.none()):new tq(e.key,e.data,tV.none());{let r=e.data,n=ej.empty(),i=new eh(Y.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new tz(e.key,n,new ed(i.toArray()),tV.none())}}function tF(e,t,r,n){return e instanceof tq?function(e,t,r,n){if(!tM(e.precondition,t))return r;let i=e.value.clone(),s=tK(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof tz?function(e,t,r,n){if(!tM(e.precondition,t))return r;let i=tK(e.fieldTransforms,n,t),s=t.data;return(s.setAll(tB(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):tM(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function tU(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&$(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof tN&&n instanceof tN||r instanceof tb&&n instanceof tb?$(r.elements,n.elements,eL):r instanceof tx&&n instanceof tx?eL(r.Re,n.Re):r instanceof tA&&n instanceof tA)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tq extends tO{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class tz extends tO{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tB(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function t$(e,t,r){let n=new Map;A(e.length===r.length,32656,{Ve:r.length,me:e.length});for(let s=0;s<r.length;s++){var i;let a=e[s],o=a.transform,l=t.data.field(a.field);n.set(a.field,(i=r[s],o instanceof tN?tk(o,l):o instanceof tb?tD(o,l):i))}return n}function tK(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof tA?function(e,t){let r={fields:{[eE]:{stringValue:ew},[e_]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eC(t)&&(t=eI(t)),t&&(r.fields[eT]=t),{mapValue:r}}(t,s):e instanceof tN?tk(e,s):e instanceof tb?tD(e,s):function(e,t){var r,n;let i=(r=e,n=t,r instanceof tx?eU(n)||n&&"doubleValue"in n?n:{integerValue:0}:null),s=tR(i)+tR(e.Re);return eU(i)&&eU(e.Re)?{integerValue:""+s}:/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ei(t)?"-0":t}}(e.serializer,s)}(e,s))}return n}class tG extends tO{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tQ{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof tq?function(e,t,r){let n=e.value.clone(),i=t$(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof tz?function(e,t,r){if(!tM(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=t$(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(tB(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=tF(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=tF(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=tT();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(n.key)?null:a;let o=tP(s,a);null!==o&&r.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tC())}isEqual(e){return this.batchId===e.batchId&&$(this.mutations,e.mutations,(e,t)=>tU(e,t))&&$(this.baseMutations,e.baseMutations,(e,t)=>tU(e,t))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tH{constructor(e,t){this.count=e,this.unchangedNames=t}}function tW(e){if(void 0===e)return T("GRPC error has no .code"),N.UNKNOWN;switch(e){case n.OK:return N.OK;case n.CANCELLED:return N.CANCELLED;case n.UNKNOWN:return N.UNKNOWN;case n.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case n.INTERNAL:return N.INTERNAL;case n.UNAVAILABLE:return N.UNAVAILABLE;case n.UNAUTHENTICATED:return N.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case n.NOT_FOUND:return N.NOT_FOUND;case n.ALREADY_EXISTS:return N.ALREADY_EXISTS;case n.PERMISSION_DENIED:return N.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case n.ABORTED:return N.ABORTED;case n.OUT_OF_RANGE:return N.OUT_OF_RANGE;case n.UNIMPLEMENTED:return N.UNIMPLEMENTED;case n.DATA_LOSS:return N.DATA_LOSS;default:return I(39323,{code:e})}}(i=n||(n={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tY=new c.z8([4294967295,4294967295],0);function tX(e){let t=F().encode(e),r=new c.V8;return r.update(t),new Uint8Array(r.digest())}function tJ(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new c.z8([r,n],0),new c.z8([i,s],0)]}class tZ{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new t0(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new t0(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new t0(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=c.z8.fromNumber(this.pe)}we(e,t,r){let n=e.add(t.multiply(c.z8.fromNumber(r)));return 1===n.compare(tY)&&(n=new c.z8([n.getBits(0),n.getBits(1)],0)),n.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.pe)return!1;let t=tX(e),[r,n]=tJ(t);for(let e=0;e<this.hashCount;e++){let t=this.we(r,n,e);if(!this.Se(t))return!1}return!0}static create(e,t,r){let n=new Uint8Array(Math.ceil(e/8)),i=new tZ(n,e%8==0?0:8-e%8,t);return r.forEach(e=>i.insert(e)),i}insert(e){if(0===this.pe)return;let t=tX(e),[r,n]=tJ(t);for(let e=0;e<this.hashCount;e++){let t=this.we(r,n,e);this.be(t)}}be(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class t0 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,t2.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new t1(G.min(),n,new eo(q),tv,tC())}}class t2{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new t2(r,t,tC(),tC(),tC())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(e,t,r,n){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=n}}class t4{constructor(e,t){this.targetId=e,this.Ce=t}}class t6{constructor(e,t,r=ef.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class t9{constructor(){this.Fe=0,this.Me=t7(),this.xe=ef.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return 0!==this.Fe}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=tC(),t=tC(),r=tC();return this.Me.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:I(38017,{changeType:i})}}),new t2(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=t7()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,A(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class t5{constructor(e){this.ze=e,this.je=new Map,this.He=tv,this.Je=t8(),this.Ye=t8(),this.Ze=new eo(q)}Xe(e){for(let t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(let t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{let r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:I(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((e,r)=>{this.it(r)&&t(r)})}ot(e){let t=e.targetId,r=e.Ce.count,n=this._t(t);if(n){let i=n.target;if(ta(i)){if(0===r){let e=new X(i.path);this.tt(t,e,eH.newNoDocument(e,G.min()))}else A(1===r,20013,{expectedCount:r})}else{let n=this.ut(t);if(n!==r){let r=this.ct(e),i=r?this.lt(r,e,n):1;0!==i&&(this.st(t),this.Ze=this.Ze.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}ct(e){let t,r;let n=e.Ce.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=n;try{t=ev(i).toUint8Array()}catch(e){if(e instanceof em)return _("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new tZ(t,s,a)}catch(e){return _(e instanceof t0?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.pe?null:r}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){let r=this.ze.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.ze.Pt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.tt(t,r,null),n++)}),n}It(e){let t=new Map;this.je.forEach((r,n)=>{let i=this._t(n);if(i){if(r.current&&ta(i.target)){let t=new X(i.target.path);this.Et(t).has(n)||this.dt(n,t)||this.tt(n,t,eH.newNoDocument(t,e))}r.Le&&(t.set(n,r.qe()),r.Qe())}});let r=tC();this.Ye.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this._t(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.He.forEach((t,r)=>r.setReadTime(e));let n=new t1(e,t,this.Ze,this.He,r);return this.He=tv,this.Je=t8(),this.Ye=t8(),this.Ze=new eo(q),n}et(e,t){if(!this.it(e))return;let r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;let n=this.rt(e);this.dt(e,t)?n.$e(t,1):n.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){let t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new t9,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new eh(q),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new eh(q),this.Je=this.Je.insert(e,t)),t}it(e){let t=null!==this._t(e);return t||E("WatchChangeAggregator","Detected inactive target",e),t}_t(e){let t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new t9),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function t8(){return new eo(X.comparator)}function t7(){return new eo(X.comparator)}let re={asc:"ASCENDING",desc:"DESCENDING"},rt={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rr={and:"AND",or:"OR"};class rn{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ri(e,t){return e.useProto3Json||null==t?t:{value:t}}function rs(e){return A(!!e,49232),G.fromTimestamp(function(e){let t=ep(e);return new K(t.seconds,t.nanos)}(e))}function ra(e,t){let r=new H(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function ro(e){let t=H.fromString(e);return A(rf(t),10190,{key:t.toString()}),t}function rl(e,t){let r=ro(t);if(r.get(1)!==e.databaseId.projectId)throw new k(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new k(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new X(rc(r))}function ru(e,t){return ra(e.databaseId,t).canonicalString()}function rh(e){return new H(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rc(e){return A(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function rd(e){return{fieldPath:e.canonicalString()}}function rm(e){return Y.fromServerFormat(e.fieldPath)}function rf(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,r,n,i=G.min(),s=G.min(),a=ef.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new rg(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rg(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.wt=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(ey(e.integerValue));else if("doubleValue"in e){let r=ey(e.doubleValue);isNaN(r)?this.Mt(t,13):(this.Mt(t,15),ei(r)?t.xt(0):t.xt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Mt(t,20),"string"==typeof r&&(r=ep(r)),t.Ot(`${r.seconds||""}`),t.xt(r.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(ev(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Mt(t,45),t.xt(r.latitude||0),t.xt(r.longitude||0)}else"mapValue"in e?eQ(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):eK(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):I(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){let r=e.fields||{};for(let e of(this.Mt(t,55),Object.keys(r)))this.Nt(e,t),this.Ct(r[e],t)}qt(e,t){var r,n;let i=e.fields||{};this.Mt(t,53);let s=(null===(n=null===(r=i[ex].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.length)||0;this.Mt(t,15),t.xt(ey(s)),this.Nt(ex,t),this.Ct(i[ex],t)}$t(e,t){let r=e.values||[];for(let e of(this.Mt(t,50),r))this.Ct(e,t)}kt(e,t){this.Mt(t,37),X.fromName(e).path.forEach(e=>{this.Mt(t,60),this.Kt(e,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}ry.Wt=new ry;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(){this.Cn=new rw}addToCollectionParentIndex(e,t){return this.Cn.add(t),et.resolve()}getCollectionParents(e,t){return et.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return et.resolve()}deleteFieldIndex(e,t){return et.resolve()}deleteAllFieldIndexes(e){return et.resolve()}createTargetIndexes(e,t){return et.resolve()}getDocumentsMatchingTarget(e,t){return et.resolve(null)}getIndexType(e,t){return et.resolve(0)}getFieldIndexes(e,t){return et.resolve([])}getNextCollectionGroupToUpdate(e){return et.resolve(null)}getMinOffset(e,t){return et.resolve(J.min())}getMinOffsetFromCollectionGroup(e,t){return et.resolve(J.min())}updateCollectionGroup(e,t,r){return et.resolve()}updateIndexEntries(e,t){return et.resolve()}}class rw{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new eh(H.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new eh(H.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rT{static withCacheSize(e){return new rT(e,rT.DEFAULT_COLLECTION_PERCENTILE,rT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rT.DEFAULT_COLLECTION_PERCENTILE=10,rT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rT.DEFAULT=new rT(41943040,rT.DEFAULT_COLLECTION_PERCENTILE,rT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rT.DISABLED=new rT(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new r_(0)}static lr(){return new r_(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rC="LruGarbageCollector";function rI([e,t],[r,n]){let i=q(e,r);return 0===i?q(t,n):i}class rS{constructor(e){this.Er=e,this.buffer=new eh(rI),this.dr=0}Ar(){return++this.dr}Rr(e){let t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>rI(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class rA{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return null!==this.Vr}mr(e){E(rC,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){er(e)?E(rC,"Ignoring IndexedDB error during garbage collection: ",e):await ee(e)}await this.mr(3e5)})}}class rN{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return et.resolve(en.le);let r=new rS(t);return this.gr.forEachTarget(e,e=>r.Rr(e.sequenceNumber)).next(()=>this.gr.yr(e,e=>r.Rr(e))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(E("LruGarbageCollector","Garbage collection skipped; disabled"),et.resolve(rE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(E("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rE):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,n,i,s,a,o,l;let h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(E("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,s=Date.now(),this.nthSequenceNumber(e,n))).next(n=>(r=n,a=Date.now(),this.removeTargets(e,r,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,r))).next(e=>(l=Date.now(),w()<=u.in.DEBUG&&E("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-h}ms
	Determined least recently used ${n} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-h}ms`),et.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.changes=new ty(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eH.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?et.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&tF(r.mutation,e,ed.empty(),K.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tC()).next(()=>t))}getLocalViewOfDocuments(e,t,r=tC()){let n=tT();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=tE();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=tT();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,tC()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=tv,s=tT(),a=tT();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof tz)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),tF(a.mutation,t,a.mutation.getFieldMask(),K.now())):s.set(t.key,ed.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new rb(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=tT(),n=new eo((e,t)=>e-t),i=tC();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=r.get(e)||ed.empty();a=i.applyToLocalView(s,a),r.set(e,a);let o=(n.get(i.batchId)||tC()).add(e);n=n.insert(i.batchId,o)})}).next(()=>{let s=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,u=tT();l.forEach(e=>{if(!i.has(e)){let n=tP(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return et.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return X.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):et.resolve(tT()),a=-1,o=i;return s.next(t=>et.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),i.get(t)?et.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,tC())).next(e=>{let t;return{batchId:a,changes:(t=tw,e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t)}}))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(e=>{let t=tE();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=tE();return this.indexManager.getCollectionParents(e,i).next(a=>et.forEach(a,a=>{var o;let l=(o=a.child(i),new to(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,eH.newInvalidDocument(n)))});let r=tE();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&tF(s.mutation,n,ed.empty(),K.now()),tg(t,n)&&(r=r.insert(e,n))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return et.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,{id:t.id,version:t.version,createTime:rs(t.createTime)}),et.resolve()}getNamedQuery(e,t){return et.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,r,n,i,s,a,o,l;let u,h=function(e){let t=ro(e);return 4===t.length?H.emptyPath():rc(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,m=null;if(d>0){A(1===d,65062);let e=c.from[0];e.allDescendants?m=e.collectionId:h=h.child(e.collectionId)}let f=[];c.where&&(f=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=rm(e.unaryFilter.field);return e0.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=rm(e.unaryFilter.field);return e0.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=rm(e.unaryFilter.field);return e0.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=rm(e.unaryFilter.field);return e0.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return I(61313);default:return I(60726)}}(t):void 0!==t.fieldFilter?e0.create(rm(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return I(58110);default:return I(50506)}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?e1.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return I(1026)}}(t.compositeFilter.op)):I(30097,{filter:t})}(e);return r instanceof e1&&e3(t=r)&&e2(t)?r.getFilters():[r]}(c.where));let g=[];c.orderBy&&(g=c.orderBy.map(e=>new eJ(rm(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let p=null;c.limit&&(p=null==(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=function(e){let t=!!e.before,r=e.values||[];return new eW(r,t)}(c.startAt));let v=null;return c.endAt&&(v=function(e){let t=!e.before,r=e.values||[];return new eW(r,t)}(c.endAt)),r=h,n=m,i=g,s=f,a=p,o=y,l=v,new to(r,n,i,s,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tc(t,t.limit,"L"):t}(t.bundledQuery),readTime:rs(t.readTime)}),et.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.overlays=new eo(X.comparator),this.Qr=new Map}getOverlay(e,t){return et.resolve(this.overlays.get(t))}getOverlays(e,t){let r=tT();return et.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.bt(e,t,n)}),et.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.Qr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.Qr.delete(r)),et.resolve()}getOverlaysForCollection(e,t,r){let n=tT(),i=t.length+1,s=new X(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return et.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new eo((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=tT(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tT(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return et.resolve(a)}bt(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.Qr.get(n.largestBatchId).delete(r.key);this.Qr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new tj(t,r));let i=this.Qr.get(t);void 0===i&&(i=tC(),this.Qr.set(t,i)),this.Qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(){this.sessionToken=ef.EMPTY_BYTE_STRING}getSessionToken(e){return et.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,et.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(){this.$r=new eh(rM.Ur),this.Kr=new eh(rM.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){let r=new rM(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.zr(new rM(e,t))}jr(e,t){e.forEach(e=>this.removeReference(e,t))}Hr(e){let t=new X(new H([])),r=new rM(t,e),n=new rM(t,e+1),i=[];return this.Kr.forEachInRange([r,n],e=>{this.zr(e),i.push(e.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){let t=new X(new H([])),r=new rM(t,e),n=new rM(t,e+1),i=tC();return this.Kr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new rM(e,0),r=this.$r.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class rM{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return X.comparator(e.key,t.key)||q(e.Zr,t.Zr)}static Wr(e,t){return q(e.Zr,t.Zr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new eh(rM.Ur)}checkEmpty(e){return et.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new tQ(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.Xr=this.Xr.add(new rM(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return et.resolve(s)}lookupMutationBatch(e,t){return et.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.ti(t+1),n=r<0?0:r;return et.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return et.resolve(0===this.mutationQueue.length?-1:this.nr-1)}getAllMutationBatches(e){return et.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new rM(t,0),n=new rM(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,n],e=>{let t=this.ei(e.Zr);i.push(t)}),et.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new eh(q);return t.forEach(e=>{let t=new rM(e,0),n=new rM(e,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([t,n],e=>{r=r.add(e.Zr)})}),et.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;X.isDocumentKey(i)||(i=i.child(""));let s=new rM(new X(i),0),a=new eh(q);return this.Xr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.Zr)),!0)},s),et.resolve(this.ni(a))}ni(e){let t=[];return e.forEach(e=>{let r=this.ei(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){A(0===this.ri(t.batchId,"removed"),55003),this.mutationQueue.shift();let r=this.Xr;return et.forEach(t.mutations,n=>{let i=new rM(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){let r=new rM(t,0),n=this.Xr.firstAfterOrEqual(r);return et.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,et.resolve()}ri(e,t){return this.ti(e)}ti(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ei(e){let t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.ii=e,this.docs=new eo(X.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return et.resolve(r?r.document.mutableCopy():eH.newInvalidDocument(t))}getEntries(e,t){let r=tv;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():eH.newInvalidDocument(e))}),et.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=tv,s=t.path,a=new X(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=X.comparator(e.documentKey,t.documentKey))?r:q(e.largestBatchId,t.largestBatchId)}(new J(a.readTime,a.key,-1),r)||(n.has(a.key)||tg(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return et.resolve(i)}getAllFromCollectionGroup(e,t,r,n){I(9500)}si(e,t){return et.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new rF(this)}getSize(e){return et.resolve(this.size)}}class rF extends rk{constructor(e){super(),this.Br=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Br.addEntry(e,n)):this.Br.removeEntry(r)}),et.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(e){this.persistence=e,this.oi=new ty(e=>ti(e),ts),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this._i=0,this.ai=new rV,this.targetCount=0,this.ui=r_.cr()}forEachTarget(e,t){return this.oi.forEach((e,r)=>t(r)),et.resolve()}getLastRemoteSnapshotVersion(e){return et.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return et.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),et.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),et.resolve()}Tr(e){this.oi.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.ui=new r_(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,et.resolve()}updateTargetData(e,t){return this.Tr(t),et.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,et.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.oi.forEach((s,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.oi.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),et.waitFor(i).next(()=>n)}getTargetCount(e){return et.resolve(this.targetCount)}getTargetData(e,t){let r=this.oi.get(t)||null;return et.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),et.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),et.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),et.resolve()}getMatchingKeysForTargetId(e,t){let r=this.ai.Yr(t);return et.resolve(r)}containsKey(e,t){return et.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rq{constructor(e,t){this.ci={},this.overlays={},this.li=new en(0),this.hi=!1,this.hi=!0,this.Pi=new rL,this.referenceDelegate=e(this),this.Ti=new rU(this),this.indexManager=new rv,this.remoteDocumentCache=new rP(e=>this.referenceDelegate.Ii(e)),this.serializer=new rp(t),this.Ei=new rx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new rO(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){E("MemoryPersistence","Starting transaction:",e);let n=new rz(this.li.next());return this.referenceDelegate.di(),r(n).next(e=>this.referenceDelegate.Ai(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Ri(e,t){return et.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class rz extends Z{constructor(e){super(),this.currentSequenceNumber=e}}class rB{constructor(e){this.persistence=e,this.Vi=new rV,this.mi=null}static fi(e){return new rB(e)}get gi(){if(this.mi)return this.mi;throw I(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),et.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),et.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),et.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(e=>this.gi.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.gi.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return et.forEach(this.gi,r=>{let n=X.fromPath(r);return this.pi(e,n).next(e=>{e||t.removeEntry(n,G.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(e=>{e?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return et.or([()=>et.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class r${constructor(e,t){this.persistence=e,this.yi=new ty(e=>(function(e){var t,r;let n="";for(let t=0;t<e.length;t++)n.length>0&&(n=n+"\x01\x01"),n=function(e,t){let r=t,n=e.length;for(let t=0;t<n;t++){let n=e.charAt(t);switch(n){case"\x00":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=n}}return r}(e.get(t),n);return n+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new rN(this,t)}static fi(e,t){return new r$(e,t)}di(){}Ai(e){return et.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){let t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Sr(e){let t=0;return this.yr(e,e=>{t++}).next(()=>t)}yr(e,t){return et.forEach(this.yi,(r,n)=>this.Dr(e,r,n).next(e=>e?et.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,n=this.persistence.getRemoteDocumentCache(),i=n.newChangeBuffer();return n.si(e,n=>this.Dr(e,n,t).next(e=>{e||(r++,i.removeEntry(n,G.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),et.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),et.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),et.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),et.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(eR(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=eI(t);return r?16+e(r):16;case 5:return 2*t.stringValue.length;case 6:return ev(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,r)=>t+e(r),0);case 10:case 11:var n;let i;return n=t.mapValue,i=0,ea(n.fields,(t,r)=>{i+=t.length+e(r)}),i;default:throw I(13486,{value:t})}}(e.data.value)),t}Dr(e,t,r){return et.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.yi.get(t);return et.resolve(void 0!==e&&e>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rK{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.ds=r,this.As=n}static Rs(e,t){let r=tC(),n=tC();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new rK(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rG{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rQ{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=(0,h.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}((0,h.z$)())>0?6:4}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.ws(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Ss(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new rG;return this.bs(e,t,r).next(n=>{if(i.result=n,this.fs)return this.Ds(e,t,r,n.size)})}).next(()=>i.result)}Ds(e,t,r,n){return r.documentReadCount<this.gs?(w()<=u.in.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",tf(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),et.resolve()):(w()<=u.in.DEBUG&&E("QueryEngine","Query:",tf(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.ps*n?(w()<=u.in.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",tf(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,th(t))):et.resolve())}ws(e,t){if(tl(t))return et.resolve(null);let r=th(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=th(t=tc(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=tC(...n);return this.ys.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.vs(t,n);return this.Cs(t,s,i,r.readTime)?this.ws(e,tc(t,null,"F")):this.Fs(e,s,t,r)}))})))}Ss(e,t,r,n){return tl(t)||n.isEqual(G.min())?et.resolve(null):this.ys.getDocuments(e,r).next(i=>{let s=this.vs(t,i);return this.Cs(t,s,r,n)?et.resolve(null):(w()<=u.in.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),tf(t)),this.Fs(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,i=G.fromTimestamp(1e9===n?new K(r+1,0):new K(r,n));return new J(i,X.empty(),-1)}(n,0)).next(e=>e))})}vs(e,t){let r=new eh(tp(e));return t.forEach((t,n)=>{tg(e,n)&&(r=r.add(n))}),r}Cs(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}bs(e,t,r){return w()<=u.in.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",tf(t)),this.ys.getDocumentsMatchingQuery(e,t,J.min(),r)}Fs(e,t,r,n){return this.ys.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rj="LocalStore";class rH{constructor(e,t,r,n){this.persistence=e,this.Ms=t,this.serializer=n,this.xs=new eo(q),this.Os=new ty(e=>ti(e),ts),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rD(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}async function rW(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.Ls(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],a=tC();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({ks:e,removedBatchIds:i,addedBatchIds:s}))})})}function rY(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}async function rX(e,t,r){let n=e.xs.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!er(e))throw e;E(rj,`Failed to update sequence numbers for target ${t}: ${e}`)}e.xs=e.xs.remove(t),e.Os.delete(n.target)}function rJ(e,t,r){let n=G.min(),i=tC();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.Os.get(r);return void 0!==n?et.resolve(e.xs.get(n)):e.Ti.getTargetData(t,r)})(e,s,th(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Ti.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ms.getDocumentsMatchingQuery(s,t,r?n:G.min(),r?i:tC())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Ns.get(n)||G.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Ns.set(n,s),{documents:r,$s:i}}))}class rZ{constructor(){this.activeTargetIds=tI}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class r0{constructor(){this.xo=new rZ,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new rZ,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r2="ConnectivityMonitor";class r3{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){for(let e of(E(r2,"Network connectivity changed: AVAILABLE"),this.Qo))e(0)}qo(){for(let e of(E(r2,"Network connectivity changed: UNAVAILABLE"),this.Qo))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r4=null;function r6(){return null===r4?r4=268435456+Math.round(2147483648*Math.random()):r4++,"0x"+r4.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r9="RestConnection",r5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class r8{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${n}`,this.Go=this.databaseId.database===eN?`project_id=${r}`:`project_id=${r}&database_id=${n}`}zo(e,t,r,n,i){let s=r6(),a=this.jo(e,t.toUriEncodedString());E(r9,`Sending RPC '${e}' ${s}:`,a,r);let o={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(o,n,i);let{host:l}=new URL(a),u=(0,h.Xx)(l);return this.Jo(e,a,o,r,u).then(t=>(E(r9,`Received RPC '${e}' ${s}: `,t),t),t=>{throw _(r9,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",r),t})}Yo(e,t,r,n,i,s){return this.zo(e,t,r,n,i)}Ho(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+y,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}jo(e,t){let r=r5[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r7{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ne="WebChannelConnection";class nt extends r8{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,n,i){let s=r6();return new Promise((i,a)=>{let o=new d.JJ;o.setWithCredentials(!0),o.listenOnce(d.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case d.jK.NO_ERROR:let t=o.getResponseJson();E(ne,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case d.jK.TIMEOUT:E(ne,`RPC '${e}' ${s} timed out`),a(new k(N.DEADLINE_EXCEEDED,"Request time out"));break;case d.jK.HTTP_ERROR:let r=o.getStatus();if(E(ne,`RPC '${e}' ${s} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(t)>=0?t:N.UNKNOWN}(t.status);a(new k(e,t.message))}else a(new k(N.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new k(N.UNAVAILABLE,"Connection failed."));break;default:I(9055,{l_:e,streamId:s,h_:o.getLastErrorCode(),P_:o.getLastError()})}}finally{E(ne,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(n);E(ne,`RPC '${e}' ${s} sending request:`,n),o.send(t,"POST",l,r,15)})}T_(e,t,r){let i=r6(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,d.UE)(),o=(0,d.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Ho(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let h=s.join("");E(ne,`Creating RPC '${e}' stream ${i}: ${h}`,l);let c=a.createWebChannel(h,l),m=!1,f=!1,g=new r7({Zo:t=>{f?E(ne,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(m||(E(ne,`Opening RPC '${e}' stream ${i} transport.`),c.open(),m=!0),E(ne,`RPC '${e}' stream ${i} sending:`,t),c.send(t))},Xo:()=>c.close()}),p=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,d.ii.EventType.OPEN,()=>{f||(E(ne,`RPC '${e}' stream ${i} transport opened.`),g.__())}),p(c,d.ii.EventType.CLOSE,()=>{f||(f=!0,E(ne,`RPC '${e}' stream ${i} transport closed`),g.u_())}),p(c,d.ii.EventType.ERROR,t=>{f||(f=!0,_(ne,`RPC '${e}' stream ${i} transport errored. Name:`,t.name,"Message:",t.message),g.u_(new k(N.UNAVAILABLE,"The operation could not be completed")))}),p(c,d.ii.EventType.MESSAGE,t=>{var r;if(!f){let s=t.data[0];A(!!s,16349);let a=(null==s?void 0:s.error)||(null===(r=s[0])||void 0===r?void 0:r.error);if(a){E(ne,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,r=function(e){let t=n[e];if(void 0!==t)return tW(t)}(t),s=a.message;void 0===r&&(r=N.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),f=!0,g.u_(new k(r,s)),c.close()}else E(ne,`RPC '${e}' stream ${i} received:`,s),g.c_(s)}}),p(o,d.ju.STAT_EVENT,t=>{t.stat===d.kN.PROXY?E(ne,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===d.kN.NOPROXY&&E(ne,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.a_()},0),g}}function nr(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,r=1e3,n=1.5,i=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=n,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();let t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),n=Math.max(0,t-r);n>0&&E("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,n,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){null!==this.R_&&(this.R_.skipDelay(),this.R_=null)}cancel(){null!==this.R_&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni="PersistentStream";class ns{constructor(e,t,r,n,i,s,a,o){this.xi=e,this.y_=r,this.w_=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new nn(e,t)}F_(){return 1===this.state||5===this.state||this.M_()}M_(){return 2===this.state||3===this.state}start(){this.v_=0,4!==this.state?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&null===this.b_&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,4!==e?this.C_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(T(t.toString()),T("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===N.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;let e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.S_===t&&this.K_(e,r)},t=>{e(()=>{let e=new k(N.UNKNOWN,"Fetching auth token failed: "+t.message);return this.W_(e)})})}K_(e,t){let r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(e=>{r(()=>this.W_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.v_?this.z_(e):this.onNext(e))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return E(ni,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(E(ni,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class na extends ns{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:I(39313,{state:n}),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(A(void 0===i||"string"==typeof i,58123),ef.fromBase64String(i||"")):(A(void 0===i||i instanceof m||i instanceof Uint8Array,16193),ef.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?N.UNKNOWN:tW(e.code);return new k(t,e.message||"")}(l);r=new t6(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=rl(e,n.document.name),s=rs(n.document.updateTime),a=n.document.createTime?rs(n.document.createTime):G.min(),o=new ej({mapValue:{fields:n.document.fields}}),l=eH.newFoundDocument(i,s,a,o),u=n.targetIds||[],h=n.removedTargetIds||[];r=new t3(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=rl(e,n.document),s=n.readTime?rs(n.readTime):G.min(),a=eH.newNoDocument(i,s),o=n.removedTargetIds||[];r=new t3([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=rl(e,n.document),s=n.removedTargetIds||[];r=new t3([],s,i,null)}else{if(!("filter"in t))return I(11601,{Vt:t});{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new tH(n,i),a=e.targetId;r=new t4(a,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return G.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?G.min():t.readTime?rs(t.readTime):G.min()}(e);return this.listener.j_(t,r)}H_(e){let t={};t.database=rh(this.serializer),t.addTarget=function(e,t){var r,n;let i;let s=t.target;if((i=ta(s)?{documents:{documents:[ru(e,s.path)]}}:{query:function(e,t){var r,n;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=ru(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof e0?function(e){if("=="===e.op){if(eB(e.value))return{unaryFilter:{field:rd(e.field),op:"IS_NAN"}};if(ez(e.value))return{unaryFilter:{field:rd(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eB(e.value))return{unaryFilter:{field:rd(e.field),op:"IS_NOT_NAN"}};if(ez(e.value))return{unaryFilter:{field:rd(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rd(e.field),op:rt[e.op],value:e.value}}}(t):t instanceof e1?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:rr[t.op],filters:r}}}(t):I(54877,{filter:t})}(e1.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:rd(e.field),direction:re[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=ri(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(s.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{gt:s,parent:i}}(e,s).gt}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){i.resumeToken=(r=t.resumeToken,e.useProto3Json?r.toBase64():r.toUint8Array());let n=ri(e,t.expectedCount);null!==n&&(i.expectedCount=n)}else if(t.snapshotVersion.compareTo(G.min())>0){i.readTime=(n=t.snapshotVersion.toTimestamp(),e.useProto3Json?`${new Date(1e3*n.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+n.nanoseconds).slice(-9)}Z`:{seconds:""+n.seconds,nanos:n.nanoseconds});let r=ri(e,t.expectedCount);null!==r&&(i.expectedCount=r)}return i}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I(28987,{purpose:e})}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){let t={};t.database=rh(this.serializer),t.removeTarget=e,this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{}class nl extends no{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.na=!1}ra(){if(this.na)throw new k(N.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,n){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.zo(e,ra(t,r),n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new k(N.UNKNOWN,e.toString())})}Yo(e,t,r,n,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Yo(e,ra(t,r),n,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new k(N.UNKNOWN,e.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class nu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){0===this.ia&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){"Online"===this.state?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,"Online"===e&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(T(t),this.oa=!1):E("OnlineStateTracker",t)}la(){null!==this.sa&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nh="RemoteStore";class nc{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(e=>{r.enqueueAndForget(async()=>{nE(this)&&(E(nh,"Restarting streams for network reachability change."),await async function(e){e.Ta.add(4),await nm(e),e.da.set("Unknown"),e.Ta.delete(4),await nd(e)}(this))})}),this.da=new nu(r,n)}}async function nd(e){if(nE(e))for(let t of e.Ia)await t(!0)}async function nm(e){for(let t of e.Ia)await t(!1)}function nf(e,t){e.Pa.has(t.targetId)||(e.Pa.set(t.targetId,t),nw(e)?nv(e):nk(e).M_()&&np(e,t))}function ng(e,t){let r=nk(e);e.Pa.delete(t),r.M_()&&ny(e,t),0===e.Pa.size&&(r.M_()?r.N_():nE(e)&&e.da.set("Unknown"))}function np(e,t){if(e.Aa.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(G.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}nk(e).H_(t)}function ny(e,t){e.Aa.Ke(t),nk(e).J_(t)}function nv(e){e.Aa=new t5({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>e.Pa.get(t)||null,Pt:()=>e.datastore.serializer.databaseId}),nk(e).start(),e.da._a()}function nw(e){return nE(e)&&!nk(e).F_()&&e.Pa.size>0}function nE(e){return 0===e.Ta.size}async function nT(e){e.da.set("Online")}async function n_(e){e.Pa.forEach((t,r)=>{np(e,t)})}async function nC(e,t){e.Aa=void 0,nw(e)?(e.da.ca(t),nv(e)):e.da.set("Unknown")}async function nI(e,t,r){if(e.da.set("Online"),t instanceof t6&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.Pa.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.Pa.delete(n),e.Aa.removeTarget(n))}(e,t)}catch(r){E(nh,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await nS(e,r)}else if(t instanceof t3?e.Aa.Xe(t):t instanceof t4?e.Aa.ot(t):e.Aa.nt(t),!r.isEqual(G.min()))try{let t=await rY(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.Aa.It(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.Pa.get(n);i&&e.Pa.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.Pa.get(t);if(!n)return;e.Pa.set(t,n.withResumeToken(ef.EMPTY_BYTE_STRING,n.snapshotVersion)),ny(e,t);let i=new rg(n.target,t,r,n.sequenceNumber);np(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){E(nh,"Failed to raise snapshot:",t),await nS(e,t)}}async function nS(e,t,r){if(!er(t))throw t;e.Ta.add(1),await nm(e),e.da.set("Offline"),r||(r=()=>rY(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E(nh,"Retrying IndexedDB access"),await r(),e.Ta.delete(1),await nd(e)})}async function nA(e,t){e.asyncQueue.verifyOperationInProgress(),E(nh,"RemoteStore received new credentials");let r=nE(e);e.Ta.add(3),await nm(e),r&&e.da.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ta.delete(3),await nd(e)}async function nN(e,t){t?(e.Ta.delete(2),await nd(e)):t||(e.Ta.add(2),await nm(e),e.da.set("Unknown"))}function nk(e){var t,r,n;return e.Ra||(e.Ra=(t=e.datastore,r=e.asyncQueue,n={e_:nT.bind(null,e),n_:n_.bind(null,e),i_:nC.bind(null,e),j_:nI.bind(null,e)},t.ra(),new na(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.Ia.push(async t=>{t?(e.Ra.O_(),nw(e)?nv(e):e.da.set("Unknown")):(await e.Ra.stop(),e.Aa=void 0)})),e.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new b,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=Date.now()+r,a=new nb(e,t,s,n,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new k(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nD(e,t){if(T("AsyncQueue",`${t}: ${e}`),er(e))return new k(N.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{static emptySet(e){return new nx(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(e,t)=>X.comparator(e.key,t.key),this.keyedMap=tE(),this.sortedSet=new eo(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nx)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new nx;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.ma=new eo(X.comparator)}track(e){let t=e.doc.key,r=this.ma.get(t);r?0!==e.type&&3===r.type?this.ma=this.ma.insert(t,e):3===e.type&&1!==r.type?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.ma=this.ma.remove(t):1===e.type&&2===r.type?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):I(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){let e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class nL{constructor(e,t,r,n,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new nL(e,t,nx.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&td(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class nM{constructor(){this.queries=nO(),this.onlineState="Unknown",this.ba=new Set}terminate(){!function(e,t){let r=e.queries;e.queries=nO(),r.forEach((e,r)=>{for(let e of r.ya)e.onError(t)})}(this,new k(N.ABORTED,"Firestore shutting down"))}}function nO(){return new ty(e=>tm(e),td)}async function nP(e,t){let r=3,n=t.query,i=e.queries.get(n);i?!i.wa()&&t.Sa()&&(r=2):(i=new nV,r=t.Sa()?0:1);try{switch(r){case 0:i.pa=await e.onListen(n,!0);break;case 1:i.pa=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=nD(r,`Initialization of query '${tf(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.ya.push(t),t.Da(e.onlineState),i.pa&&t.va(i.pa)&&nz(e)}async function nF(e,t){let r=t.query,n=3,i=e.queries.get(r);if(i){let e=i.ya.indexOf(t);e>=0&&(i.ya.splice(e,1),0===i.ya.length?n=t.Sa()?0:1:!i.wa()&&t.Sa()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function nU(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.ya)e.va(n)&&(r=!0);i.pa=n}}r&&nz(e)}function nq(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.ya)e.onError(r);e.queries.delete(t)}function nz(e){e.ba.forEach(e=>{e.next()})}(a=s||(s={})).Ca="default",a.Cache="cache";class nB{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new nL(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){return!(e.fromCache&&this.Sa())||(!this.options.La||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Oa(e){if(e.docChanges.length>0)return!0;let t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Ba(e){e=nL.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==s.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n${constructor(e){this.key=e}}class nK{constructor(e){this.key=e}}class nG{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=tC(),this.mutatedKeys=tC(),this.Ha=tp(e),this.Ja=new nx(this.Ha)}get Ya(){return this.Ga}Za(e,t){let r=t?t.Xa:new nR,n=t?t.Ja:this.Ja,i=t?t.mutatedKeys:this.mutatedKeys,s=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=tg(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),m=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(r.track({type:3,doc:h}),m=!0):this.eu(u,h)||(r.track({type:2,doc:h}),m=!0,(o&&this.Ha(h,o)>0||l&&0>this.Ha(h,l))&&(a=!0)):!u&&h?(r.track({type:0,doc:h}),m=!0):u&&!h&&(r.track({type:1,doc:u}),m=!0,(o||l)&&(a=!0)),m&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{Ja:s,Xa:r,Cs:a,mutatedKeys:i}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;let s=e.Xa.ga();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I(20277,{Vt:e})}};return r(e)-r(t)})(e.type,t.type)||this.Ha(e.doc,t.doc)),this.tu(r),n=null!=n&&n;let a=t&&!n?this.nu():[],o=0===this.ja.size&&this.current&&!n?1:0,l=o!==this.za;return(this.za=o,0!==s.length||l)?{snapshot:new nL(this.query,e.Ja,i,s,e.mutatedKeys,0===o,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:a}:{ru:a}}Da(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new nR,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(e=>this.Ga=this.Ga.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ga=this.Ga.delete(e)),this.current=e.current)}nu(){if(!this.current)return[];let e=this.ja;this.ja=tC(),this.Ja.forEach(e=>{this.iu(e.key)&&(this.ja=this.ja.add(e.key))});let t=[];return e.forEach(e=>{this.ja.has(e)||t.push(new nK(e))}),this.ja.forEach(r=>{e.has(r)||t.push(new n$(r))}),t}su(e){this.Ga=e.$s,this.ja=tC();let t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return nL.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,0===this.za,this.hasCachedResults)}}let nQ="SyncEngine";class nj{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class nH{constructor(e){this.key=e,this._u=!1}}class nW{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.au={},this.uu=new ty(e=>tm(e),td),this.cu=new Map,this.lu=new Set,this.hu=new eo(X.comparator),this.Pu=new Map,this.Tu=new rV,this.Iu={},this.Eu=new Map,this.du=r_.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return!0===this.Au}}async function nY(e,t,r=!0){let n;let i=ir(e),s=i.uu.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.ou()):n=await nJ(i,t,r,!0),n}async function nX(e,t){let r=ir(e);await nJ(r,t,!0,!1)}async function nJ(e,t,r,n){var i,s;let a;let o=await (i=e.localStore,s=th(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Ti.getTargetData(e,s).next(r=>r?(t=r,et.resolve(t)):i.Ti.allocateTargetId(e).next(r=>(t=new rg(s,r,"TargetPurposeListen",e.currentSequenceNumber),i.Ti.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.xs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.xs=i.xs.insert(e.targetId,e),i.Os.set(s,e.targetId)),e})),l=o.targetId,u=e.sharedClientState.addLocalQueryTarget(l,r);return n&&(a=await nZ(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&r&&nf(e.remoteStore,o),a}async function nZ(e,t,r,n,i){e.Ru=(t,r,n)=>(async function(e,t,r,n){let i=t.view.Za(r);i.Cs&&(i=await rJ(e.localStore,t.query,!1).then(({documents:e})=>t.view.Za(e,i)));let s=n&&n.targetChanges.get(t.targetId),a=n&&null!=n.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return n5(e,t.targetId,o.ru),o.snapshot})(e,t,r,n);let s=await rJ(e.localStore,t,!0),a=new nG(t,s.$s),o=a.Za(s.documents),l=t2.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);n5(e,r,u.ru);let h=new nj(t,r,a);return e.uu.set(t,h),e.cu.has(r)?e.cu.get(r).push(t):e.cu.set(r,[t]),u.snapshot}async function n0(e,t,r){let n=e.uu.get(t),i=e.cu.get(n.targetId);if(i.length>1)return e.cu.set(n.targetId,i.filter(e=>!td(e,t))),void e.uu.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await rX(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&ng(e.remoteStore,n.targetId),n6(e,n.targetId)}).catch(ee)):(n6(e,n.targetId),await rX(e.localStore,n.targetId,!0))}async function n1(e,t){let r=e.uu.get(t),n=e.cu.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ng(e.remoteStore,r.targetId))}async function n2(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.Bs.newChangeBuffer({trackRemovals:!0});n=e.xs;let u=[];t.targetChanges.forEach((s,a)=>{let o=n.get(a);if(!o)return;u.push(e.Ti.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Ti.addMatchingKeys(i,s.addedDocuments,a)));let l=o.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?l=l.withResumeToken(ef.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,r)),n=n.insert(a,l),function(e,t,r){if(0===e.resumeToken.approximateByteSize())return!0;let n=t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds();if(n>=3e8)return!0;let i=r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size;return i>0}(o,l,s)&&u.push(e.Ti.updateTargetData(i,l))});let h=tv,c=tC();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),u.push((s=t.documentUpdates,a=tC(),o=tC(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=tv;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(r)),n.isNoDocument()&&n.version.isEqual(G.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):E(rj,"Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{qs:t,Qs:o}})).next(e=>{h=e.qs,c=e.Qs})),!r.isEqual(G.min())){let t=e.Ti.getLastRemoteSnapshotVersion(i).next(t=>e.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(t)}return et.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.xs=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Pu.get(r);n&&(A(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?n._u=!0:t.modifiedDocuments.size>0?A(n._u,14607):t.removedDocuments.size>0&&(A(n._u,42227),n._u=!1))}),await n7(e,r,t)}catch(e){await ee(e)}}function n3(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.uu.forEach((e,r)=>{let n=r.view.Da(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.ya)e.Da(t)&&(r=!0)}),r&&nz(n),i.length&&e.au.j_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function n4(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Pu.get(t),i=n&&n.key;if(i){let r=new eo(X.comparator);r=r.insert(i,eH.newNoDocument(i,G.min()));let n=tC().add(i),s=new t1(G.min(),new Map,new eo(q),r,n);await n2(e,s),e.hu=e.hu.remove(i),e.Pu.delete(t),n8(e)}else await rX(e.localStore,t,!1).then(()=>n6(e,t,r)).catch(ee)}function n6(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.cu.get(t)))e.uu.delete(n),r&&e.au.Vu(n,r);e.cu.delete(t),e.isPrimaryClient&&e.Tu.Hr(t).forEach(t=>{e.Tu.containsKey(t)||n9(e,t)})}function n9(e,t){e.lu.delete(t.path.canonicalString());let r=e.hu.get(t);null!==r&&(ng(e.remoteStore,r),e.hu=e.hu.remove(t),e.Pu.delete(r),n8(e))}function n5(e,t,r){for(let n of r)n instanceof n$?(e.Tu.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.hu.get(r)||e.lu.has(n)||(E(nQ,"New document in limbo: "+r),e.lu.add(n),n8(e))}(e,n)):n instanceof nK?(E(nQ,"Document no longer in limbo: "+n.key),e.Tu.removeReference(n.key,t),e.Tu.containsKey(n.key)||n9(e,n.key)):I(19791,{mu:n})}function n8(e){for(;e.lu.size>0&&e.hu.size<e.maxConcurrentLimboResolutions;){var t;let r=e.lu.values().next().value;e.lu.delete(r);let n=new X(H.fromString(r)),i=e.du.next();e.Pu.set(i,new nH(n)),e.hu=e.hu.insert(n,i),nf(e.remoteStore,new rg(th((t=n.path,new to(t))),i,"TargetPurposeLimboResolution",en.le))}}async function n7(e,t,r){let n=[],i=[],s=[];e.uu.isEmpty()||(e.uu.forEach((a,o)=>{s.push(e.Ru(o,t,r).then(t=>{var s;if((t||r)&&e.isPrimaryClient){let n=t?!t.fromCache:null===(s=null==r?void 0:r.targetChanges.get(o.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(o.targetId,n?"current":"not-current")}if(t){n.push(t);let e=rK.Rs(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.au.j_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>et.forEach(t,t=>et.forEach(t.ds,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>et.forEach(t.As,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!er(e))throw e;E(rj,"Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.xs.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.xs=e.xs.insert(t,i)}}}(e.localStore,i))}async function ie(e,t){if(!e.currentUser.isEqual(t)){E(nQ,"User change. New user:",t.toKey());let r=await rW(e.localStore,t);e.currentUser=t,e.Eu.forEach(e=>{e.forEach(e=>{e.reject(new k(N.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Eu.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await n7(e,r.ks)}}function it(e,t){let r=e.Pu.get(t);if(r&&r._u)return tC().add(r.key);{let r=tC(),n=e.cu.get(t);if(!n)return r;for(let t of n){let n=e.uu.get(t);r=r.unionWith(n.view.Ya)}return r}}function ir(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=n2.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=it.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=n4.bind(null,e),e.au.j_=nU.bind(null,e.eventManager),e.au.Vu=nq.bind(null,e.eventManager),e}class ii{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){var t;this.serializer=(t=e.databaseInfo.databaseId,new rn(t,!0)),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){var t,r,n,i;return t=this.persistence,r=new rQ,n=e.initialUser,i=this.serializer,new rH(t,r,n,i)}yu(e){return new rq(rB.fi,this.serializer)}pu(e){return new r0}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ii.provider={build:()=>new ii};class is extends ii{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){A(this.persistence.referenceDelegate instanceof r$,46915);let r=this.persistence.referenceDelegate.garbageCollector;return new rA(r,e.asyncQueue,t)}yu(e){let t=void 0!==this.cacheSizeBytes?rT.withCacheSize(this.cacheSizeBytes):rT.DEFAULT;return new rq(e=>r$.fi(e,t),this.serializer)}}class ia{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>n3(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ie.bind(null,this.syncEngine),await nN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nM}createDatastore(e){var t,r,n,i;let s=(t=e.databaseInfo.databaseId,new rn(t,!0)),a=(r=e.databaseInfo,new nt(r));return n=e.authCredentials,i=e.appCheckCredentials,new nl(n,i,a,s)}createRemoteStore(e){var t,r,n,i;return t=this.localStore,r=this.datastore,n=e.asyncQueue,i=r3.C()?new r3:new r1,new nc(t,r,n,e=>n3(this.syncEngine,e,0),i)}createSyncEngine(e,t){return function(e,t,r,n,i,s,a){let o=new nW(e,t,r,n,i,s);return a&&(o.Au=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){E(nh,"RemoteStore shutting down."),e.Ta.add(5),await nm(e),e.Ea.shutdown(),e.da.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}ia.provider={build:()=>new ia};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):T("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il="FirestoreClient";class iu{constructor(e,t,r,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=p.UNAUTHENTICATED,this.clientId=U.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async e=>{E(il,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(E(il,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new b;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=nD(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function ih(e,t){e.asyncQueue.verifyOperationInProgress(),E(il,"Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await rW(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ic(e,t){e.asyncQueue.verifyOperationInProgress();let r=await id(e);E(il,"Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>nA(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>nA(t.remoteStore,r)),e._onlineComponents=t}async function id(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){E(il,"Using user provided OfflineComponentProvider");try{await ih(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;_("Error using user provided cache. Falling back to memory cache: "+t),await ih(e,new ii)}}else E(il,"Using default OfflineComponentProvider"),await ih(e,new is(void 0))}return e._offlineComponents}async function im(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(E(il,"Using user provided OnlineComponentProvider"),await ic(e,e._uninitializedComponentsProvider._online)):(E(il,"Using default OnlineComponentProvider"),await ic(e,new ia))),e._onlineComponents}async function ig(e){let t=await im(e),r=t.eventManager;return r.onListen=nY.bind(null,t.syncEngine),r.onUnlisten=n0.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=nX.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=n1.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(e,t,r){if(!r)throw new k(N.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function iw(e){if(!X.isDocumentKey(e))throw new k(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function iE(e){if(X.isDocumentKey(e))throw new k(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function iT(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new k(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":I(12329,{type:typeof e})}(e);throw new k(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i_="firestore.googleapis.com";class iC{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new k(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=i_,this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new k(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new k(N.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ip(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new k(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new k(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new k(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class iI{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iC({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new k(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iC(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new x;switch(e.type){case"firstParty":return new M(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new k(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=iy.get(e);t&&(E("ComponentProvider","Removing Datastore"),iy.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new iS(this.firestore,e,this._query)}}class iA{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new iN(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new iA(this.firestore,e,this._key)}}class iN extends iS{constructor(e,t,r){super(e,t,new to(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new iA(this.firestore,null,new X(e))}withConverter(e){return new iN(this.firestore,e,this._path)}}function ik(e,t,...r){if(e=(0,h.m9)(e),iv("collection","path",t),e instanceof iI){let n=H.fromString(t,...r);return iE(n),new iN(e,null,n)}{if(!(e instanceof iA||e instanceof iN))throw new k(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(H.fromString(t,...r));return iE(n),new iN(e.firestore,null,n)}}function ib(e,t,...r){if(e=(0,h.m9)(e),1==arguments.length&&(t=U.newId()),iv("doc","path",t),e instanceof iI){let n=H.fromString(t,...r);return iw(n),new iA(e,null,new X(n))}{if(!(e instanceof iA||e instanceof iN))throw new k(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(H.fromString(t,...r));return iw(n),new iA(e.firestore,e instanceof iN?e.converter:null,new X(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iD="AsyncQueue";class ix{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new nn(this,"async_queue_retry"),this.ec=()=>{let e=nr();e&&E(iD,"Visibility state changed to "+e.visibilityState),this.C_.p_()},this.tc=e;let t=nr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;let t=nr();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});let t=new b;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(0!==this.zu.length){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!er(e))throw e;E(iD,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){let t=this.tc.then(()=>(this.Yu=!0,e().catch(e=>{throw this.Ju=e,this.Yu=!1,T("INTERNAL UNHANDLED ERROR: ",iR(e)),e}).then(e=>(this.Yu=!1,e))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);let n=nb.createAndSchedule(this,e,t,r,e=>this.oc(e));return this.Hu.push(n),n}nc(){this.Ju&&I(47125,{_c:iR(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(let t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{for(let t of(this.Hu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Hu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){let t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function iR(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class iL extends iI{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new ix,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new ix(e),this._firestoreClient=void 0,await e}}}function iV(e,t){let r="object"==typeof e?e:(0,o.Mq)(),n=(0,o.qX)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||eN});if(!n._initialized){let e=(0,h.P0)("firestore");e&&function(e,t,r,n={}){var i;e=iT(e,iI);let s=(0,h.Xx)(t),a=e._getSettings(),o=Object.assign(Object.assign({},a),{emulatorOptions:e._getEmulatorOptions()}),l=`${t}:${r}`;s&&((0,h.Uo)(`https://${l}`),(0,h.dp)("Firestore",!0)),a.host!==i_&&a.host!==l&&_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let u=Object.assign(Object.assign({},a),{host:l,ssl:s,emulatorOptions:n});if(!(0,h.vZ)(u,o)&&(e._setSettings(u),n.mockUserToken)){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=p.MOCK_USER;else{t=(0,h.Sg)(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new k(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new p(s)}e._authCredentials=new R(new D(t,r))}}(n,...e)}return n}function iM(e){if(e._terminated)throw new k(N.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,r,n,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new eA(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,ip(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator));e._componentsProvider||(null===(r=o.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=o.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),e._firestoreClient=new iu(e._authCredentials,e._appCheckCredentials,e._queue,l,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e){this._byteString=e}static fromBase64String(e){try{return new iO(ef.fromBase64String(e))}catch(e){throw new k(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new iO(ef.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new k(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new k(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new k(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iU{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}}let iq=RegExp("[~\\*/\\[\\]]");function iz(e,t,r,n,i){let s=n&&!n.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new k(N.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new iA(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new i$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(iK("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class i$ extends iB{data(){return super.data()}}function iK(e,t){return"string"==typeof t?function(e,t,r){if(t.search(iq)>=0)throw iz(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new iP(...t.split("."))._internalPath}catch(n){throw iz(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}(e,t):t instanceof iP?t._internalPath:t._delegate._internalPath}class iG{convertValue(e,t="none"){switch(eR(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ey(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ev(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw I(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return ea(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertVectorValue(e){var t,r,n;let i=null===(n=null===(r=null===(t=e.fields)||void 0===t?void 0:t[ex].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map(e=>ey(e.doubleValue));return new iU(i)}convertGeoPoint(e){return new iF(ey(e.latitude),ey(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=eI(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(eS(e));default:return null}}convertTimestamp(e){let t=ep(e);return new K(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=H.fromString(e);A(rf(r),9688,{name:e});let n=new ek(r.get(1),r.get(3)),i=new X(r.popFirst(5));return n.isEqual(t)||T(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iQ{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ij extends iB{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new iH(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(iK("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class iH extends ij{data(e={}){return super.data(e)}}class iW{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new iQ(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new iH(this._firestore,this._userDataWriter,r.key,r,new iQ(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new k(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new iH(e._firestore,e._userDataWriter,r.doc.key,r.doc,new iQ(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new iH(e._firestore,e._userDataWriter,t.doc.key,t.doc,new iQ(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I(61501,{type:e})}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iY(e){e=iT(e,iA);let t=iT(e.firestore,iL);return(function(e,t,r={}){let n=new b;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){var s;let a=new io({next:s=>{a.Cu(),t.enqueueAndForget(()=>nF(e,o));let l=s.docs.has(r);!l&&s.fromCache?i.reject(new k(N.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&s.fromCache&&n&&"server"===n.source?i.reject(new k(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new nB((s=r.path,new to(s)),a,{includeMetadataChanges:!0,La:!0});return nP(e,o)})(await ig(e),e.asyncQueue,t,r,n)),n.promise})(iM(t),e._key).then(r=>(function(e,t,r){let n=r.docs.get(t._key),i=new iX(e);return new ij(e,i,t._key,n,new iQ(r.hasPendingWrites,r.fromCache),t.converter)})(t,e,r))}class iX extends iG{constructor(e){super(),this.firestore=e}convertBytes(e){return new iO(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new iA(this.firestore,null,t)}}function iJ(e){e=iT(e,iS);let t=iT(e.firestore,iL),r=iM(t),n=new iX(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new k(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new b;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new io({next:r=>{s.Cu(),t.enqueueAndForget(()=>nF(e,a)),r.fromCache&&"server"===n.source?i.reject(new k(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),a=new nB(r,s,{includeMetadataChanges:!0,La:!0});return nP(e,a)})(await ig(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new iW(t,n,e,r)))}new WeakMap,function(e=!0){y=o.Jn,(0,o.Xd)(new l.wA("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new iL(new L(t.getProvider("auth-internal")),new P(i,t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new k(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ek(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(f,g,void 0),(0,o.KN)(f,g,"esm2017")}()}}]);
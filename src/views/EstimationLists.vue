<template>
  <div class="wrapper-main">
    <div class="container-custom-L">
      <section class="section-block">
        <h1 class="card-title">Estimation List</h1>

        <div class="est-list-content">
          <table class="est-table">
            <thead class="est-thead">
            <tr>
              <th style="width: 30%"><p style="text-align: left" class="e-c-info-name">Client's Name</p></th>
              <th style="width: 30%"><p style="text-align: left" class="e-c-info-name">PM</p></th>
              <th style="width: 10%"><p class="e-c-info-name">Date Create</p></th>
              <th style="width: 10%"><p class="e-c-info-name">Download</p></th>
              <th style="width: 10%"><p class="e-c-info-name">Edit</p></th>
              <th style="width: 10%"><p class="e-c-info-name">Delete</p></th>
            </tr>
            </thead>

            <tbody>
              <tr class="est-table-cards" v-for="(item, index) in records" :key="index">
                <th style="width: 30%"><p style="text-align: left" class="e-c-info-date">{{ item.clientInfo.clientName }}</p></th>
                <th style="width: 30%"><p style="text-align: left" class="e-c-info-date">{{ item.clientInfo.PM }}</p></th>
                <th style="width: 10%"><p class="e-c-info-date">{{ item.date_create }}</p></th>
                <th style="width: 10%">
                  <button class="btn est-btn-download" @click="createDocument(index)">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.0132 15.9293C24.0265 14.6195 24.0265 13.2965 24.0265 12.0131C24.0265 11.6426 23.828 11.3648 23.4972 11.259C23.2591 11.1928 23.0342 11.2325 22.849 11.3648C22.6637 11.4971 22.5579 11.7353 22.5579 12.0131V22.4916H1.49504V12.1057C1.49504 11.9337 1.46858 11.7882 1.41566 11.6691C1.30981 11.4177 1.0452 11.2457 0.754135 11.2457C0.727674 11.2457 0.687982 11.259 0.635061 11.259H0.595369C0.238148 11.3251 0 11.6294 0 12.0263V22.2667C0 23.3251 0.661521 23.9999 1.73319 23.9999H22.2933C23.3517 23.9999 24.0132 23.3383 24.0132 22.2535V15.9293Z" fill="#636363"/>
                      <path d="M17.6099 12.86C17.5305 12.6483 17.332 12.4895 17.0939 12.4366C16.8557 12.3837 16.6043 12.4631 16.4059 12.6483C15.837 13.204 15.2813 13.7596 14.7256 14.3153C14.5536 14.4873 14.3816 14.6593 14.2096 14.8313C14.117 14.9107 14.0376 15.0033 13.945 15.0959C13.9053 15.1356 13.8524 15.1885 13.773 15.2415L12.7675 16.194V0.674752C12.7411 0.3043 12.4103 0 12.0531 0C11.8414 0 11.6694 0.0661521 11.5371 0.198456C11.3783 0.357222 11.2989 0.568909 11.2989 0.833517V16.247L10.2405 15.2547C10.2008 15.215 10.1744 15.1885 10.1479 15.1621C10.1214 15.1356 10.0817 15.0959 10.0553 15.0562L9.28791 14.2889C8.74547 13.7464 8.18979 13.1907 7.63411 12.6483C7.47534 12.4895 7.27689 12.4101 7.07843 12.4101H7.0652C6.87998 12.4101 6.70798 12.4895 6.54921 12.6351C6.24491 12.9394 6.28461 13.3892 6.6286 13.7332C7.55473 14.6725 8.50732 15.6119 9.40699 16.5248C9.88328 16.9879 10.3463 17.4642 10.8226 17.9272L11.3519 18.4564C11.8149 18.9195 12.1854 18.9195 12.6617 18.4564L17.4246 13.6935C17.7025 13.4421 17.7422 13.1907 17.6099 12.86Z" fill="#636363"/>
                    </svg>
                    <div style="display: none">
                      <div :class="'document-content-list-' + index">

                        <div style='page-break-before: always; position: fixed; top: 0; left: 0; width: 100%; text-align: left'>
                          <img src="logo.png" width="152" height="56" alt="logo">
                        </div>

                        <div style="width: 100%">
                          <p class="MsoNormal" style="text-align:justify"><span lang="ru" style="font-size:
15.0pt;line-height:115%;font-family:Nunito;mso-fareast-font-family:Nunito;
mso-bidi-font-family:Nunito">Hello,<b style="mso-bidi-font-weight:normal">{{item.clientInfo.clientName}}!</b></span></p>

                          <h2 align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal; font-family:Nunito;">
                            Project Description</b></h2>

                          <h3 style="text-align:justify"><span lang="ru" style="font-size:12.0pt;line-height:115%;font-family:Nunito;mso-fareast-font-family:
          Nunito;mso-bidi-font-family:Nunito">{{item.projectInfo.description}}</span></h3>

                          <h2 align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal; font-family:Nunito;">
                            Project Info</b></h2>

                          <table width="601" border="1" cellspacing="0" cellpadding="0"
                                 style="
                                 border-collapse:collapse;mso-table-layout-alt:fixed;border:none;
                                 mso-yfti-tbllook:1536;mso-padding-alt:5.0pt 5.0pt 5.0pt 5.0pt;
                                 mso-border-alt:solid #F1C232 1.0pt;
                                 mso-border-insideh:1.0pt solid #F1C232;
                                 mso-border-insidev:1.0pt solid #F1C232;">
                            <thead>
                            <tr>
                              <td width="200" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Type</p></td>
                              <td width="401" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Platform</p></td>
                            </tr>
                            </thead>

                            <tbody width="601" border="1" cellspacing="0" cellpadding="0">
                            <tr>
                              <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{item.projectInfo.type}}</p></td>
                              <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{item.projectInfo.platform}}</p></td>
                            </tr>
                            </tbody>
                          </table>

                          <table width="601" border="1" cellspacing="0" cellpadding="0"
                                 style="
                                 border-collapse:collapse;mso-table-layout-alt:fixed;border:none;
                                 mso-yfti-tbllook:1536;mso-padding-alt:5.0pt 5.0pt 5.0pt 5.0pt;
                                 mso-border-alt:solid #F1C232 1.0pt;
                                 mso-border-insideh:1.0pt solid #F1C232;
                                 mso-border-insidev:1.0pt solid #F1C232;">
                            <thead>
                            <tr>
                              <td width="200" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Name</p></td>
                              <td width="401" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Attributes</p></td>
                            </tr>
                            </thead>
                            <tbody width="601" border="1" cellspacing="0" cellpadding="0">
                            <tr>
                              <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Authentication</p></td>
                              <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{item.attributesInfo.authorization}}</p></td>
                            </tr>
                            <tr>
                              <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">User Profile</p></td>
                              <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{item.attributesInfo.profile}}</p></td>
                            </tr>
                            <tr>
                              <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Dashboard</p></td>
                              <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{item.attributesInfo.dashboard}}</p></td>
                            </tr>
                            <tr>
                              <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Publish Post</p></td>
                              <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{item.attributesInfo.publish}}</p></td>
                            </tr>
                            <tr>
                              <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Subscribe</p></td>
                              <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{item.attributesInfo.subscribe}}</p></td>
                            </tr>
                            <tr>
                              <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Referral</p></td>
                              <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{item.attributesInfo.referral}}</p></td>
                            </tr>
                            <tr>
                              <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Payment</p></td>
                              <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{item.attributesInfo.payment}}</p></td>
                            </tr>
                            <tr>
                              <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Balance</p></td>
                              <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{item.attributesInfo.balance}}</p></td>
                            </tr>
                            </tbody>
                          </table>

                          <h2 align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal; font-family:Nunito;">
                            ESTIMATION AND FUNCTIONALITY</b></h2>

                          <table width="601" border="1" cellspacing="0" cellpadding="0"
                                 style="
                                 border-collapse:collapse;mso-table-layout-alt:fixed;border:none;
                                 mso-yfti-tbllook:1536;mso-padding-alt:5.0pt 5.0pt 5.0pt 5.0pt;
                                 mso-border-alt:solid #F1C232 1.0pt;
                                 mso-border-insideh:1.0pt solid #F1C232;
                                 mso-border-insidev:1.0pt solid #F1C232;">
                            <thead>
                            <tr>
                              <th width="70" style="border: solid #F1C232 1.0pt; background: #FFF2CC;">
                                <p style="text-align: center; line-height: normal; font-size: 12.0pt; font-family: Nunito; mso-fareast-font-family: Nunito; color: #434343;">Dev</p>
                              </th>
                              <th width="431" style="border: solid #F1C232 1.0pt; background: #FFF2CC;">
                                <p style="text-align: center; line-height: normal; font-size: 12.0pt; font-family: Nunito; mso-fareast-font-family: Nunito; color: #434343;">In Work</p>
                              </th>
                              <th width="100" style="border: solid #F1C232 1.0pt; background: #FFF2CC;">
                                <p style="text-align: center; line-height: normal; font-size: 12.0pt; font-family: Nunito; mso-fareast-font-family: Nunito; color: #434343;">Hours</p>
                              </th>
                            </tr>
                            </thead>

                            <tbody v-for="(item0, index) in item.constructorInfo" :key="index" width="601" border="1" cellspacing="0" cellpadding="0">
                            <tr>
                              <td width="70" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666"></p></td>
                              <td width="431" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{item0.content}}</p></td>
                              <td width="100" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666"></p></td>
                            </tr>
                            <tr>
                              <td width="70" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Dev</p></td>
                              <td width="431" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">
                                <ul style="list-style: none;">
                                  <li v-for="(item1, index) in item0.paragraph" :key="index">
                                    <div style="display: flex; justify-content: left; align-items: center; text-align: left">
                                      <p style="padding-right: 5px">{{ item1.id+1 }}. </p>
                                      <p>{{ item1.content }}</p>
                                    </div>
                                    <ul style="list-style: none;">
                                      <li v-for="(item2, index) in item1.child_paragraph" :key="index">
                                        <div style="display: flex; justify-content: left; align-items: center; text-align: left">
                                          <p style="padding-right: 5px">- </p>
                                          <p>{{item2.content}}</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                                </p></td>
                              <td width="100" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">0</p></td>
                            </tr>
                            </tbody>

                          </table>

                        </div>

                      </div>
                    </div>
                  </button>
                </th>
                <th style="width: 10%">
                  <button class="btn est-btn-edit" @click="openEditModal(index, item)">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.2722 2.98294L13.0165 4.72637M12.3939 1.44704L7.67746 6.16344C7.43377 6.4068 7.26757 6.71685 7.19981 7.05451L6.76416 9.23524L8.94489 8.79876C9.28254 8.73123 9.59219 8.5657 9.83596 8.32194L14.5524 3.60553C14.6941 3.4638 14.8065 3.29555 14.8832 3.11037C14.9599 2.92519 14.9994 2.72672 14.9994 2.52629C14.9994 2.32585 14.9599 2.12738 14.8832 1.9422C14.8065 1.75702 14.6941 1.58877 14.5524 1.44704C14.4106 1.30531 14.2424 1.19288 14.0572 1.11618C13.872 1.03948 13.6735 1 13.4731 1C13.2727 1 13.0742 1.03948 12.889 1.11618C12.7039 1.19288 12.5356 1.30531 12.3939 1.44704V1.44704Z" stroke="#636363" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13.3531 10.8824V13.353C13.3531 13.7898 13.1795 14.2087 12.8707 14.5176C12.5618 14.8265 12.1428 15 11.706 15H2.64708C2.21024 15 1.7913 14.8265 1.48242 14.5176C1.17353 14.2087 1 13.7898 1 13.353V4.29405C1 3.85722 1.17353 3.43828 1.48242 3.12939C1.7913 2.8205 2.21024 2.64697 2.64708 2.64697H5.11769" stroke="#636363" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </th>
                <th style="width: 10%">
                  <button class="btn est-btn-delete" @click="openDeleteModal(index)">
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.51562 7.58445V19.8928C1.51562 22.2342 3.28111 23.9997 5.61006 23.9997H14.6629C14.9133 23.9997 15.1512 23.9747 15.3891 23.9371C16.3783 23.7618 17.2172 23.2735 17.8182 22.5473C18.4318 21.8211 18.7448 20.907 18.7448 19.9053V7.68462C18.7448 7.57193 18.7448 7.48428 18.7198 7.38411C18.6822 7.15873 18.5695 6.98343 18.4067 6.87074C18.2314 6.75805 18.0311 6.72048 17.8182 6.78309C17.4676 6.87074 17.2673 7.15872 17.2673 7.59697V19.8677C17.2673 21.4329 16.1779 22.5348 14.6128 22.5348H5.62258C4.06995 22.5348 2.98061 21.4454 2.98061 19.8803V7.42167C2.96808 7.23385 2.86791 7.03351 2.70514 6.9083C2.55488 6.78309 2.37959 6.75805 2.25438 6.75805C2.21681 6.75805 2.15421 6.75805 2.14169 6.75805H2.12916C1.72848 6.8457 1.51562 7.13368 1.51562 7.58445Z" fill="#636363"/>
                      <path d="M19.8093 4.40433C19.922 4.11634 19.8719 3.8534 19.6591 3.6155C19.5213 3.45272 19.321 3.37759 19.0205 3.37759H14.2374V0.798226C14.2374 0.3099 13.9494 0.0093909 13.4861 0.0093909C11.5328 -0.0031303 9.40422 -0.0031303 6.78729 0.0093909C6.42417 0.0093909 6.14871 0.20973 6.06106 0.535281C6.03601 0.647972 6.03601 0.785705 6.03601 0.910917V3.39011H5.28474C4.88406 3.37759 4.47086 3.37759 4.08271 3.37759H1.21535C0.952408 3.37759 0.727026 3.46524 0.576772 3.64054C0.45156 3.77827 0.388954 3.96609 0.401475 4.19147C0.426517 4.60467 0.752068 4.86762 1.25292 4.86762H19.1833C19.5088 4.83005 19.6966 4.6798 19.8093 4.40433ZM12.7599 3.36507H7.50099V1.49941H12.7599V3.36507Z" fill="#636363"/>
                      <path d="M7.87656 18.3652C8.06438 18.3652 8.2522 18.2901 8.37741 18.1649C8.52766 18.0272 8.60279 17.8143 8.60279 17.5639V9.81325C8.60279 9.68804 8.57775 9.56283 8.52766 9.43761C8.42749 9.19971 8.16455 9.02441 7.87656 9.02441C7.81395 9.02441 7.78891 9.02441 7.75135 9.03694C7.38823 9.11206 7.15033 9.38753 7.13781 9.76316V14.6464C7.12529 15.598 7.12529 16.5747 7.13781 17.5388C7.15033 18.0272 7.43832 18.3527 7.87656 18.3652Z" fill="#636363"/>
                      <path d="M12.5596 18.34C12.8976 18.2398 13.098 17.9769 13.1105 17.6138V9.83812C13.1105 9.34979 12.8225 9.02424 12.3843 9.01172C12.1839 9.01172 11.9961 9.08685 11.8709 9.21206C11.6831 9.38735 11.6455 9.63778 11.6455 9.81308C11.658 10.965 11.658 12.2046 11.658 13.5319C11.658 14.8466 11.658 16.2114 11.658 17.5762C11.658 17.714 11.7081 17.8767 11.7832 18.052C11.921 18.3024 12.2465 18.4277 12.5596 18.34Z" fill="#636363"/>
                    </svg>
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>

        <EditModalWindow :isEditModalOpen="isEditModalOpen"
                         :id="idRecord"
                         :recordInfo="recordInfo"
                         :closeEditModal="closeEditModal"/>

        <DeleteModalWindow :isDeleteModalOpen="isDeleteModalOpen"
                         :id="idRecord"
                         :closeDeleteModal="closeDeleteModal"/>

      </section>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

import EditModalWindow from "@/views/EditModalWindow";
import DeleteModalWindow from "@/views/DeleteModalWindow";

export default {
  name: "EstimationLists",
  components: {
    EditModalWindow,
    DeleteModalWindow
  },
  setup() {
    const isEditModalOpen = ref(false);
    const isDeleteModalOpen = ref(false);
    let idRecord = ref();
    let recordInfo = ref();

    const openEditModal = (id, item) => {
      idRecord.value = id;
      recordInfo.value = item;
      isEditModalOpen.value = true;
    };

    const closeEditModal = () => {
      isEditModalOpen.value = false;
    };

    const openDeleteModal = (id) => {
      idRecord.value = id;
      isDeleteModalOpen.value = true;
    };

    const closeDeleteModal = () => {
      isDeleteModalOpen.value = false;
    };

    const store = useStore();
    let records = ref([]);

    onMounted(async () => {
      records.value = await store.dispatch('fetchInfo')
      console.log('record: ', records);
    })

    const createDocument = async (id) => {
      const preHtml =
          "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
      const postHtml = '</body></html>';

      const contentHtml = document.querySelector(`.document-content-list-${id}`).innerHTML;

      const html = preHtml + contentHtml + postHtml;

      const blob = new Blob(['\ufeff', html], {
        type: 'application/msword',
      });

      // Specify file name
      const filename = 'document.doc';

      if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        // Create a link to the file
        const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
        const downloadLink = document.createElement('a');
        document.body.appendChild(downloadLink);

        // Setting the file name
        downloadLink.href = url;
        downloadLink.download = filename;

        // Trigger the download
        downloadLink.click();

        await document.body.removeChild(downloadLink);
      }
    };

    return {
      records,
      isEditModalOpen,
      openEditModal,
      closeEditModal,
      isDeleteModalOpen,
      openDeleteModal,
      closeDeleteModal,
      idRecord,
      recordInfo,
      createDocument
    }
  }
}
</script>

<style scoped>
/*table*/
.est-table {
  width: 100%;
}
.est-thead {
  border-bottom: 1px solid #c6c6c6;
}
.est-table-cards {
  border-bottom: 1px solid #c6c6c6;
}
.est-list-content {
  padding-top: 30px;
}
.est-list-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  border-radius: 10px;
  border: 1px solid #c6c6c6;
  margin-bottom: 10px;
}
.e-l-c-info {
  display: flex;
  justify-content: left;
  align-items: center;
}
.e-c-info-name {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  color: black;
  text-align: center;
  margin: 0;
  padding: 0;
}
.e-c-info-date {
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: black;
  margin: 0;
  padding: 0;
}
.e-l-c-buttons {
  display: flex;
  justify-content: right;
  align-items: center;
}
/*btns*/
.est-btn-download {
  background: transparent;
}
.est-btn-edit {
  background: transparent;
}
.est-btn-edit svg {
  width: 24px;
  height: 24px;
}
.est-btn-delete {
  background: transparent;
}
</style>
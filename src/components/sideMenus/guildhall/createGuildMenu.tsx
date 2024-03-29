import left_styles from "../../../styles/sidemenu/guildhall/CreateGuildLeft.module.css";
import right_styles from "../../../styles/sidemenu/guildhall/CreateGuildRight.module.css";
import Image from "next/image";
import {
  UserIcon,
  MerchantIcon,
  MasterIcon,
  ShieldIcon,
  PlusIcon,
  InfoIcon,
} from "../../../shared/icons";

export const CreateGuildLeftMenu = ({ chainPage }: any) => {
  return (
    <>
      {chainPage == 1 ? (
        <GuildInfoMenu />
      ) : chainPage == 2 ? (
        <PermissionsMenu />
      ) : (
        <WhitelistMenu />
      )}
    </>
  );
};

export const CreateGuildRightMenu = ({ ...props }: any) => {
  console.log(props.getValues("permissions"));
  return (
    <div className={right_styles.box}>
      <div className={right_styles.content_title}>
        <p>Guild Progress</p>
      </div>
      <div className={right_styles.content_container}>
        {props.getValues("name") && props.getValues("name").length != 1 ? (
          <div className={right_styles.content_row}>
            <p className={right_styles.content_row_title}>Name:</p>
            <p className={right_styles.content_row_input}>
              {props.getValues("name")}
            </p>
          </div>
        ) : null}
        {props.getValues("description") ? (
          <div className={right_styles.content_row}>
            <p className={right_styles.content_row_title}>Description</p>
            <p className={right_styles.content_row_input}>
              {props.getValues("description")}
            </p>
          </div>
        ) : null}
        {props.getValues("emblem") ? (
          <div className={right_styles.content_row}>
            <p className={right_styles.content_row_title}>Emblem:</p>
            {props.getValues("emblem") != "" ? (
              <Image
                height={100}
                width={100}
                alt="emblem"
                src={"/emblem-example.png"}
              />
            ) : null}
          </div>
        ) : null}
        {props.getValues("permissions")[0].contractAddress != "" ? (
          <div className={right_styles.content_row}>
            <p className={right_styles.content_row_title}>Permissions:</p>
            {/* <p className={right_styles.content_row_input}>
            {props.getValues("permissions")[0].contractAddress}
          </p>
          <p className={right_styles.content_row_input}>
            {props.getValues("permissions")[0].selectors[0].selector}
          </p> */}
            {props
              .getValues("permissions")
              .map((permission: any, permissionIndex: number) => (
                <div className={right_styles.game_box} key={permissionIndex}>
                  <p className={right_styles.game_title}>
                    {permission.contractAddress}
                  </p>
                  <div className={right_styles.tasks}>
                    {props
                      .getValues(`permissions.${permissionIndex}.selectors`)
                      .map((selector: any, selectorIndex: number) => (
                        <div
                          className={right_styles.task_box}
                          key={selectorIndex}
                        >
                          <p className={right_styles.task_title}>
                            {selector.selector}
                          </p>
                          <p className={right_styles.task_subtitle}>
                            Distributions
                          </p>
                          <div className={right_styles.roles}>
                            <div className={right_styles.distribution_row}>
                              <div className={right_styles.role_shape}>
                                <div className={right_styles.role_icon}>
                                  <MerchantIcon />
                                </div>
                              </div>
                              <div className={right_styles.distributions}>
                                {selector.distributions.map(
                                  (
                                    distribution: any,
                                    distributionIndex: number
                                  ) => (
                                    <div
                                      className={right_styles.distribution}
                                      key={distributionIndex}
                                    >
                                      <p>{distribution.merchant}%</p>
                                      <div>
                                        <Image
                                          alt="token_image"
                                          src={distribution.token.image}
                                          width={10}
                                          height={10}
                                        />
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                            <div className={right_styles.distribution_row}>
                              <div className={right_styles.role_shape}>
                                <div className={right_styles.role_icon}>
                                  <UserIcon />
                                </div>
                              </div>
                              <div className={right_styles.distributions}>
                                {selector.distributions.map(
                                  (
                                    distribution: any,
                                    distributionIndex: number
                                  ) => (
                                    <div
                                      className={right_styles.distribution}
                                      key={distributionIndex}
                                    >
                                      <p>{distribution.journeyman}%</p>
                                      <div>
                                        <Image
                                          alt="token_image"
                                          src={distribution.token.image}
                                          width={10}
                                          height={10}
                                        />
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                            <div className={right_styles.distribution_row}>
                              <div className={right_styles.role_shape}>
                                <div className={right_styles.role_icon}>
                                  <MasterIcon />
                                </div>
                              </div>
                              <div className={right_styles.distributions}>
                                {selector.distributions.map(
                                  (
                                    distribution: any,
                                    distributionIndex: number
                                  ) => (
                                    <div
                                      className={right_styles.distribution}
                                      key={distributionIndex}
                                    >
                                      <p>{distribution.master}%</p>
                                      <div>
                                        <Image
                                          alt="token_image"
                                          src={distribution.token.image}
                                          width={10}
                                          height={10}
                                        />
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                            <div className={right_styles.distribution_row}>
                              <div className={right_styles.role_shape}>
                                <div className={right_styles.role_icon}>
                                  <ShieldIcon />
                                </div>
                              </div>
                              <div className={right_styles.distributions}>
                                {selector.distributions.map(
                                  (
                                    distribution: any,
                                    distributionIndex: number
                                  ) => (
                                    <div
                                      className={right_styles.distribution}
                                      key={distributionIndex}
                                    >
                                      <p>{distribution.guild}%</p>
                                      <div>
                                        <Image
                                          alt="token_image"
                                          src={distribution.token.image}
                                          width={10}
                                          height={10}
                                        />
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                          <p className={right_styles.task_subtitle}>Payments</p>
                          <div className={right_styles.roles}>
                            <div className={right_styles.distribution_row}>
                              <div className={right_styles.role_shape}>
                                <div className={right_styles.role_icon}>
                                  <MerchantIcon />
                                </div>
                              </div>
                              <div className={right_styles.distributions}>
                                {selector.payments.map(
                                  (
                                    distribution: any,
                                    distributionIndex: number
                                  ) => (
                                    <div
                                      className={right_styles.distribution}
                                      key={distributionIndex}
                                    >
                                      <p>{distribution.merchant}</p>
                                      <div>
                                        <Image
                                          alt="token_image"
                                          src={distribution.token.image}
                                          width={10}
                                          height={10}
                                        />
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                            <div className={right_styles.distribution_row}>
                              <div className={right_styles.role_shape}>
                                <div className={right_styles.role_icon}>
                                  <UserIcon />
                                </div>
                              </div>
                              <div className={right_styles.distributions}>
                                {selector.payments.map(
                                  (
                                    distribution: any,
                                    distributionIndex: number
                                  ) => (
                                    <div
                                      className={right_styles.distribution}
                                      key={distributionIndex}
                                    >
                                      <p>{distribution.journeyman}</p>
                                      <div>
                                        <Image
                                          alt="token_image"
                                          src={distribution.token.image}
                                          width={10}
                                          height={10}
                                        />
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                            <div className={right_styles.distribution_row}>
                              <div className={right_styles.role_shape}>
                                <div className={right_styles.role_icon}>
                                  <MasterIcon />
                                </div>
                              </div>
                              <div className={right_styles.distributions}>
                                {selector.payments.map(
                                  (
                                    distribution: any,
                                    distributionIndex: number
                                  ) => (
                                    <div
                                      className={right_styles.distribution}
                                      key={distributionIndex}
                                    >
                                      <p>{distribution.master}</p>
                                      <div>
                                        <Image
                                          alt="token_image"
                                          src={distribution.token.image}
                                          width={10}
                                          height={10}
                                        />
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                            <div className={right_styles.distribution_row}>
                              <div className={right_styles.role_shape}>
                                <div className={right_styles.role_icon}>
                                  <ShieldIcon />
                                </div>
                              </div>
                              <div className={right_styles.distributions}>
                                {selector.payments.map(
                                  (
                                    distribution: any,
                                    distributionIndex: number
                                  ) => (
                                    <div
                                      className={right_styles.distribution}
                                      key={distributionIndex}
                                    >
                                      <p>{distribution.guild}</p>
                                      <div>
                                        <Image
                                          alt="token_image"
                                          src={distribution.token.image}
                                          width={10}
                                          height={10}
                                        />
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        ) : null}
        {props.getValues("whitelisted")[0].address != "" ? (
          <div className={right_styles.content_row}>
            <p className={right_styles.content_row_title}>
              Whitelisted Members:
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const GuildInfoMenu = () => {
  return (
    <div className={left_styles.box}>
      <div className={left_styles.content_title}>
        <p>Guild Info</p>
      </div>
      <div className={left_styles.content_container}>
        <div className={left_styles.info_section}>
          <p className={left_styles.info_title}>Name</p>
          <p className={left_styles.info_content}>
            Make a unique name for your guild. It must be under 31 characters.
          </p>
        </div>
        <div className={left_styles.info_section}>
          <p className={left_styles.info_title}>Emblem</p>
          <p className={left_styles.info_content}>
            Emblems are a unique asset attached to each guild. Use our AI
            generator to create one easily.
          </p>
        </div>
        <div className={left_styles.info_section}>
          <p className={left_styles.info_title}>Anthem</p>
          <p className={left_styles.info_content}>
            Each guild can optionally have an anthem associated with it. Use our
            tool for generating a unique piece of music.
          </p>
        </div>
      </div>
    </div>
  );
};

const PermissionsMenu = () => {
  return (
    <div className={left_styles.box}>
      <div className={left_styles.content_title}>
        <p>Permissions Info</p>
      </div>
      <div className={left_styles.content_container}>
        <div className={left_styles.info_section}>
          <p className={left_styles.info_title}>Contract Address</p>
          <p className={left_styles.info_content}>
            This is the address of the contract you wish to allow calls to from
            the guild.{" "}
          </p>
        </div>
        <div className={left_styles.info_section}>
          <p className={left_styles.info_title}>Selectors</p>
          <p className={left_styles.info_content}>
            These are the functions on the pasted contract that you wish to
            interact with. I.e within a game you can give access to only certain
            things.
          </p>
        </div>
        <div className={left_styles.info_section}>
          <p className={left_styles.info_title}>Fee Policy</p>
          <p className={left_styles.info_subtitle}>Rewards</p>
          <p className={left_styles.info_content}>
            These are fees given based on what the guild received as part of an
            action. E.g if the task is mining gold, the gold is split between
            beneficiaries.
          </p>
          <p className={left_styles.info_subtitle}>Direct Payment</p>
          <p className={left_styles.info_content}>
            Direct payments are what is given paid for performing an action.
          </p>
        </div>
      </div>
    </div>
  );
};

const WhitelistMenu = () => {
  return (
    <div className={left_styles.box}>
      <div className={left_styles.content_title}>
        <p>Whitelist Members</p>
      </div>
      <div className={left_styles.content_container}>
        <div className={left_styles.info_section}>
          <p className={left_styles.info_title}>Wallet Address</p>
          <p className={left_styles.info_content}>
            Paste the wallet address of the member you would like to whitelist
            so that they may join this guild.
          </p>
        </div>
        <div className={left_styles.info_section}>
          <p className={left_styles.info_title}>Role</p>
          <p className={left_styles.info_content}>
            Roles must be given to determine what functions the added member can
            perform on the guild.
          </p>
        </div>
      </div>
    </div>
  );
};
